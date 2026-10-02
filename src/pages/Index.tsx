import { useState } from "react";
import InteractiveSynapseBackground from "@/components/3d/InteractiveSynapseBackground";
import HeaderNav from "@/components/layout/HeaderNav";
import StickyNavRail from "@/components/layout/StickyNavRail";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import WritingSection from "@/components/sections/WritingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import RecruiterModal from "@/components/RecruiterModal";
import SEO from "@/components/layout/SEO";

const Index = () => {
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Pranav Baghare | Software Developer (AI/ML) & Computer Vision"
        description="Software Developer (AI/ML) at Mantra Softech specializing in Computer Vision, Deep Learning, and real-world AI solutions. Satellite imagery segmentation, DenseNet medical diagnostics, and edge perception."
        path="/"
      />

      <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden selection:bg-[#f97316]/30 selection:text-white">
        {/* 3D Interactive Synapse & Bioluminescent Neural Space Background */}
        <InteractiveSynapseBackground />

        {/* Floating Top Navigation Header */}
        <HeaderNav />

        {/* Right-Side Vertical Progress Rail (01 Home to 08 Contact) */}
        <StickyNavRail />

        {/* Main Content Sections exactly aligned with Reference Design */}
        <main className="relative z-10 space-y-12 sm:space-y-16">
          {/* Section 01: Hero */}
          <HeroSection />

          {/* Section 02: About */}
          <AboutSection />

          {/* Section 03: Skills */}
          <SkillsSection />

          {/* Section 04: Experience */}
          <ExperienceSection />

          {/* Section 05: Education */}
          <EducationSection />

          {/* Section 06: Writing */}
          <WritingSection />

          {/* Section 07: Projects */}
          <ProjectsSection />

          {/* Section 08: Contact & Footer */}
          <ContactSection />
        </main>

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
