
import { useState, useEffect } from "react";
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
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div>
            <a href="/" className="nav-brand">
              CampusConnect
            </a>
          </div>

          <div className="nav-links">
            <NavLinks />
            <button className="button button-primary">Sign In</button>
          </div>

          <div className="mobile-menu-button">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <MobileNavLinks />
            <button className="button button-primary w-full">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="#events" className="nav-link">Events</a>
    <a href="#resources" className="nav-link">Resources</a>
    <a href="#communities" className="nav-link">Communities</a>
  </>
);

const MobileNavLinks = () => (
  <div className="mobile-nav-links">
    <a href="#events" className="nav-link">Events</a>
    <a href="#resources" className="nav-link">Resources</a>
    <a href="#communities" className="nav-link">Communities</a>
  </div>
);
