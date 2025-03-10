
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f48b8964-576f-43d6-b6b5-26309febba51.png" 
                alt="Ramdani Dental Center" 
                className="h-10 mr-2" 
              />
              <span className="text-2xl font-bold text-purple-900">Ramdani Dental</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-dental-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-dental-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-dental-600 transition-colors">
              Contact
            </a>
            <Button variant="outline" className="mr-2 border-purple-800 text-purple-800 hover:bg-purple-50">Login</Button>
            <Button className="bg-dental-500 hover:bg-dental-600 text-purple-900 font-semibold">Sign Up</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
