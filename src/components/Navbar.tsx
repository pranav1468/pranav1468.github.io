import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Projects", href: "/#projects", isRoute: false },
  { label: "About", href: "/about", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "/#contact", isRoute: false },
];

interface NavbarProps {
  onOpenRecruiterModal?: () => void;
}

const Navbar = ({ onOpenRecruiterModal }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link (scroll to section)
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      
      // If we're not on the homepage, navigate there first
      if (location.pathname !== "/" && path === "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on homepage, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isActive = (href: string, isRoute: boolean) => {
    if (isRoute) {
      if (href === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(href);
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Status */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-base font-semibold text-foreground hover:text-signal transition-colors"
          >
            <span className="font-serif text-lg tracking-tight">Pranav Baghare</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-signal/10 text-[10px] font-mono text-signal font-normal border border-signal/20">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              Mantra Softech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive(link.href, link.isRoute)
                      ? "text-signal font-semibold bg-signal/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </button>
              )
            ))}

            {/* Recruiter Fast View Button */}
            {onOpenRecruiterModal && (
              <button
                onClick={onOpenRecruiterModal}
                className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-signal/15 hover:bg-signal px-3.5 py-1.5 text-xs font-mono font-medium text-signal hover:text-ink-950 transition-all border border-signal/30 shadow-sm"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Recruiter View</span>
              </button>
            )}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 text-muted-foreground hover:text-foreground rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenRecruiterModal && (
              <button
                onClick={onOpenRecruiterModal}
                className="inline-flex items-center gap-1 rounded-full bg-signal/15 px-2.5 py-1 text-[11px] font-mono text-signal font-medium border border-signal/30"
              >
                <Award className="w-3 h-3" />
                <span>Recruiter</span>
              </button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-72 pb-4 pt-2 border-t border-border/40" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium text-left transition-colors rounded-lg ${
                    isActive(link.href, link.isRoute)
                      ? "text-signal bg-signal/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="px-4 py-2 text-sm font-medium text-left transition-colors rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
