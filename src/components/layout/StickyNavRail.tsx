import { useEffect, useState } from "react";

interface NavSection {
  id: string;
  num: string;
  label: string;
}

const sections: NavSection[] = [
  { id: "home", num: "01", label: "Home" },
  { id: "about", num: "02", label: "About" },
  { id: "skills", num: "03", label: "Skills" },
  { id: "experience", num: "04", label: "Experience" },
  { id: "education", num: "05", label: "Education" },
  { id: "writing", num: "06", label: "Writing" },
  { id: "projects", num: "07", label: "Projects" },
  { id: "contact", num: "08", label: "Contact" },
];

export default function StickyNavRail() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Section Navigation"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start font-mono text-[10px] select-none"
    >
      <div className="relative flex flex-col space-y-7">
        {/* Continuous vertical connecting line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-white/10 -z-10" />

        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="flex items-center gap-3 group text-left transition-colors duration-200"
            >
              {/* Dot */}
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#f97316] ring-4 ring-[#f97316]/20 scale-125"
                    : "bg-white/20 group-hover:bg-white/60"
                }`}
              />

              {/* Number and Label */}
              <span
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#f97316] font-bold"
                    : "text-white/40 group-hover:text-white/80"
                }`}
              >
                <span className="opacity-60 mr-1">{section.num}</span>
                <span>{section.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
