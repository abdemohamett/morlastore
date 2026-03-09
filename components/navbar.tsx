"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "products", "why-morla-store", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Collection", href: "#products", id: "products" },
    { name: "Why MORLA", href: "#why-morla-store", id: "why-morla-store" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-white/85 dark:bg-black/85 backdrop-blur-2xl border-b border-gray-200/10 dark:border-gray-800/10 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      {/* Decorative line */}
      <div className={`h-px bg-linear-to-r from-transparent via-black/20 to-transparent dark:via-white/20 transition-all duration-700 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with subtle animation */}
          <div className="shrink-0 group">
            <h1 className={`text-3xl md:text-4xl font-black tracking-tight transition-all duration-500 group-hover:scale-105 ${
              isScrolled ? 'text-black dark:text-white' : 'text-black dark:text-white'
            }`}>
              <span className="inline-block">Morla</span>
              <span className="inline-block ml-2 text-primary">Store</span>
            </h1>
            <div className={`h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full mt-1`}></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-16">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <a 
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 relative ${
                      activeSection === item.id
                        ? 'text-black dark:text-white'
                        : isScrolled 
                          ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                          : 'text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {/* Active indicator */}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </a>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-black/10 dark:bg-white/10"></div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                    : 'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'
                }`}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                    : 'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'
                }`}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                    : 'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'
                }`}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              
              <Button 
                size="icon" 
                className={`relative transition-all duration-300 hover:scale-110 hover:rotate-3 ${
                  isScrolled 
                    ? 'bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-lg' 
                    : 'bg-black/10 backdrop-blur-md text-black hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                  2
                </span>
              </Button>
            </div>
          </div>

          {/* Tablet & Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                  : 'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'
              }`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white' 
                  : 'text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      {isOpen && (
        <div className="xl:hidden">
          <div className="px-6 py-8 space-y-2 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-t border-gray-200/10 dark:border-gray-800/10">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className={`block px-6 py-4 text-base font-semibold transition-all duration-300 rounded-xl ${
                  activeSection === item.id
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  )}
                </div>
              </a>
            ))}
            
            <div className="flex items-center space-x-3 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button 
                size="icon" 
                className="relative bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
