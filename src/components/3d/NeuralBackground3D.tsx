import { useEffect, useRef } from "react";
import * as THREE from "three";

interface NeuralBackground3DProps {
  opacity?: number;
  className?: string;
}

export default function NeuralBackground3D({
  opacity = 0.55,
  className = "",
}: NeuralBackground3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isDisposed = false;
    let animationFrameId: number;

    // Defer initialization to avoid blocking first contentful paint
    const initTimer = setTimeout(() => {
      if (isDisposed || !container) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 320;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        });
      } catch {
        return; // Fallback gracefully if WebGL is unsupported
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

    // Particle nodes configuration
    const particleCount = window.innerWidth < 768 ? 45 : 95;
    const maxDistance = 90;
    const bounds = 340;

    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds * 1.8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds * 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds;

      velocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.25,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Node points material (signal vermilion & warm accent)
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#FF5B2E"),
      size: 4.0,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Synapse Lines
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
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.08;
      targetY = (e.clientY - window.innerHeight / 2) * 0.08;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetX = (e.touches[0].clientX - window.innerWidth / 2) * 0.05;
        targetY = (e.touches[0].clientY - window.innerHeight / 2) * 0.05;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;
    const baseColor = new THREE.Color("#FF5B2E");
    const dimColor = new THREE.Color("#5B8C5A");

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      camera.position.x = mouseX;
      camera.position.y = -mouseY;
      camera.lookAt(scene.position);

      // Rotate whole constellation subtly
      particles.rotation.y += 0.0008;
      lineMesh.rotation.y += 0.0008;

      const pos = particleGeometry.attributes.position.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        // Bounce back inside boundaries
        if (Math.abs(pos[i * 3]) > bounds) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > bounds * 0.8) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > bounds * 0.6) velocities[i].z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update dynamic connecting synapse lines
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

            // Interpolate color based on distance
            const lerpedColor = baseColor.clone().lerp(dimColor, 1 - alpha);

            lineColors[lineVertexIndex * 3] = lerpedColor.r * alpha;
            lineColors[lineVertexIndex * 3 + 1] = lerpedColor.g * alpha;
            lineColors[lineVertexIndex * 3 + 2] = lerpedColor.b * alpha;

            lineColors[(lineVertexIndex + 1) * 3] = lerpedColor.r * alpha;
            lineColors[(lineVertexIndex + 1) * 3 + 1] = lerpedColor.g * alpha;
            lineColors[(lineVertexIndex + 1) * 3 + 2] = lerpedColor.b * alpha;

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
        window.removeEventListener("touchmove", handleTouchMove);
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
    }, 50);

    return () => {
      isDisposed = true;
      clearTimeout(initTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ opacity }}
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    />
  );
}
