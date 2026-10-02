import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeuralBackground3D from "@/components/3d/NeuralBackground3D";
import ActiveBentoGrid from "@/components/home/ActiveBentoGrid";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AEOFAQSection from "@/components/home/AEOFAQSection";
import RecruiterModal from "@/components/RecruiterModal";
import SEO from "@/components/layout/SEO";

const Index = () => {
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <>
      <SEO 
        title="Pranav Baghare | Software Developer (AI/ML) & Computer Vision" 
        description="Computer Vision & Deep Learning Engineer portfolio. Building production machine learning systems, Modified U-Nets, DenseNet diagnostics, and real-time perception models."
        path="/"
      />

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Interactive 3D WebGL Neural Constellation Background */}
        <NeuralBackground3D opacity={0.65} />

        {/* Global Navigation HUD */}
        <Navbar onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />

        {/* Asymmetric 3D Split Hero */}
        <Hero onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)} />

        {/* Active Bento Grid (Interactive Proof of Work & Telemetry) */}
        <ActiveBentoGrid />

        {/* Skills Breakdown */}
        <Skills />

        {/* Deep-Dive About & Philosophy */}
        <About />

        {/* AI & Recruiter Knowledge Base / FAQ (AEO & Schema Optimized) */}
        <AEOFAQSection />

        {/* Contact Section */}
        <Contact />

        {/* Footer with System Stats */}
        <Footer />

        {/* Recruiter Fast-View (10-Second Summary) Modal */}
        <RecruiterModal 
          isOpen={isRecruiterModalOpen} 
          onClose={() => setIsRecruiterModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
