
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

export const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-primary">
              CampusConnect
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button variant="default" className="bg-primary hover:bg-primary-light">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg animate-fade-down">
            <div className="px-4 py-4 space-y-4">
              <MobileNavLinks />
              <Button variant="default" className="w-full bg-primary hover:bg-primary-light">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="#events" className="text-gray-700 hover:text-primary transition-colors">
      Events
    </a>
    <a href="#resources" className="text-gray-700 hover:text-primary transition-colors">
      Resources
    </a>
    <a href="#communities" className="text-gray-700 hover:text-primary transition-colors">
      Communities
    </a>
  </>
);

const MobileNavLinks = () => (
  <div className="flex flex-col space-y-4">
    <a href="#events" className="text-gray-700 hover:text-primary transition-colors">
      Events
    </a>
    <a href="#resources" className="text-gray-700 hover:text-primary transition-colors">
      Resources
    </a>
    <a href="#communities" className="text-gray-700 hover:text-primary transition-colors">
      Communities
    </a>
  </div>
);
