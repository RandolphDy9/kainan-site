"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Banner } from "./banner-section";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = [
      "home",
      "highlights",
      "menu",
      "trays",
      "lookinside",
      "whoweare",
      "reviews",
      "contact",
    ];

    // Function to determine which section is currently most visible
    const getActiveSection = () => {
      const scrollPosition = window.scrollY + 200; // Offset for fixed nav
      let activeSectionId = "home";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            activeSectionId = sectionId;
          }
        }
      });

      return activeSectionId;
    };

    // Set initial active section based on scroll position
    setActiveSection(getActiveSection());

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let maxRatio = 0;
        let mostVisibleSection = "home";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        // Update if we found an intersecting section with significant visibility
        if (maxRatio > 0.1) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Account for fixed nav and trigger when section is in upper portion of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Also listen to scroll events as a fallback
    const handleScroll = () => {
      const newActiveSection = getActiveSection();
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            observerRef.current?.unobserve(element);
          }
        });
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border shadow-md">
      {/* <Banner /> */}
      <div className="mx-auto px-10 shadow-2xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kainan"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-lg">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors ${
                activeSection === "home"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("highlights")}
              className={`transition-colors ${
                activeSection === "highlights"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Featured items
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className={`transition-colors ${
                activeSection === "menu"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("trays")}
              className={`transition-colors ${
                activeSection === "trays"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Party trays
            </button>
            <button
              onClick={() => scrollToSection("lookinside")}
              className={`transition-colors ${
                activeSection === "lookinside"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              A look inside
            </button>
            <button
              onClick={() => scrollToSection("whoweare")}
              className={`transition-colors ${
                activeSection === "whoweare"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Who we are
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className={`transition-colors ${
                activeSection === "reviews"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${
                activeSection === "contact"
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors ${
                  activeSection === "home"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </button>
              {/* <button
                onClick={() => scrollToSection("highlights")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Featured items
              </button> */}
              <button
                onClick={() => scrollToSection("menu")}
                className={`transition-colors ${
                  activeSection === "menu"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("trays")}
                className={`transition-colors ${
                  activeSection === "trays"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Party trays
              </button>
              <button
                onClick={() => scrollToSection("lookinside")}
                className={`transition-colors ${
                  activeSection === "lookinside"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                A look inside
              </button>
              <button
                onClick={() => scrollToSection("whoweare")}
                className={`transition-colors ${
                  activeSection === "whoweare"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Who we are
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className={`transition-colors ${
                  activeSection === "reviews"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors ${
                  activeSection === "contact"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
