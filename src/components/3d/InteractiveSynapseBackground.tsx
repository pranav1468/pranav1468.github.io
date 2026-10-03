import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveSynapseBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isDisposed = false;
    let animationFrameId: number;

    const initTimer = setTimeout(() => {
      if (isDisposed || !container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 280;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const particleCount = window.innerWidth < 768 ? 40 : 80;
      const maxDistance = 95;
      const bounds = 320;

      const positions = new Float32Array(particleCount * 3);
      const velocities: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * bounds * 1.6;
        positions[i * 3 + 1] = (Math.random() - 0.5) * bounds * 1.2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * bounds;

        velocities.push({
          x: (Math.random() - 0.5) * 0.35,
          y: (Math.random() - 0.5) * 0.35,
          z: (Math.random() - 0.5) * 0.2,
        });
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      // Cyan, magenta, and electric blue glowing particle nodes
      const particleMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#38bdf8"),
        size: 3.5,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Synapse connecting lines
      const maxLines = (particleCount * (particleCount - 1)) / 2;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3)
      );
      lineGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(lineColors, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      });

      const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineMesh);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        targetX = (e.clientX - window.innerWidth / 2) * 0.06;
        targetY = (e.clientY - window.innerHeight / 2) * 0.06;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      const colorA = new THREE.Color("#38bdf8"); // Cyan
      const colorB = new THREE.Color("#c084fc"); // Purple/Magenta

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        camera.position.x = mouseX;
        camera.position.y = -mouseY;
        camera.lookAt(scene.position);

        particles.rotation.y += 0.0006;
        lineMesh.rotation.y += 0.0006;

        const pos = particleGeometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;

          if (Math.abs(pos[i * 3]) > bounds) velocities[i].x *= -1;
          if (Math.abs(pos[i * 3 + 1]) > bounds * 0.75) velocities[i].y *= -1;
          if (Math.abs(pos[i * 3 + 2]) > bounds * 0.6) velocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        let lineVertexIndex = 0;
        let lineCount = 0;

        for (let i = 0; i < particleCount; i++) {
          const x1 = pos[i * 3];
          const y1 = pos[i * 3 + 1];
          const z1 = pos[i * 3 + 2];

          for (let j = i + 1; j < particleCount; j++) {
            const x2 = pos[j * 3];
            const y2 = pos[j * 3 + 1];
            const z2 = pos[j * 3 + 2];

            const dx = x1 - x2;
            const dy = y1 - y2;
            const dz = z1 - z2;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance) {
              const alpha = 1.0 - dist / maxDistance;

              linePositions[lineVertexIndex * 3] = x1;
              linePositions[lineVertexIndex * 3 + 1] = y1;
              linePositions[lineVertexIndex * 3 + 2] = z1;

              linePositions[(lineVertexIndex + 1) * 3] = x2;
              linePositions[(lineVertexIndex + 1) * 3 + 1] = y2;
              linePositions[(lineVertexIndex + 1) * 3 + 2] = z2;

              const lerped = colorA.clone().lerp(colorB, 1 - alpha);

              lineColors[lineVertexIndex * 3] = lerped.r * alpha;
              lineColors[lineVertexIndex * 3 + 1] = lerped.g * alpha;
              lineColors[lineVertexIndex * 3 + 2] = lerped.b * alpha;

              lineColors[(lineVertexIndex + 1) * 3] = lerped.r * alpha;
              lineColors[(lineVertexIndex + 1) * 3 + 1] = lerped.g * alpha;
              lineColors[(lineVertexIndex + 1) * 3 + 2] = lerped.b * alpha;

              lineVertexIndex += 2;
              lineCount++;
            }
          }
        }

        lineGeometry.setDrawRange(0, lineCount * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (renderer) renderer.dispose();
        particleGeometry.dispose();
        lineGeometry.dispose();
        particleMaterial.dispose();
        lineMaterial.dispose();
      };
    }, 60);

    return () => {
      isDisposed = true;
      clearTimeout(initTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* 1. Global deep space dark gradient vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

      {/* 2. Three.js Interactive 3D Neural Particle Canvas (tracks cursor) */}
      <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10" />
    </div>
  );
}
