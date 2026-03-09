"use client";

import { Mail, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-muted text-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black tracking-tighter mb-6">
              MORLA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Curated essentials for the modern gentleman. 
              Timeless pieces that transcend seasons and trends.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">STAY INFORMED</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary text-primary-foreground px-4 py-3 hover:bg-primary/90 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-black tracking-wider mb-6">NAVIGATE</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => handleSmoothScroll(e, 'home')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    onClick={(e) => handleSmoothScroll(e, 'products')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a 
                    href="#why-morla-store" 
                    onClick={(e) => handleSmoothScroll(e, 'why-morla-store')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Why MORLA
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Shop Links */}
            <div>
              <h3 className="text-sm font-black tracking-wider mb-6">SHOP</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Help */}
            <div>
              <h3 className="text-sm font-black tracking-wider mb-6">HELP</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-black tracking-wider mb-6">CONTACT</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">hello@morlastore.com</span>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} MORLA. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
