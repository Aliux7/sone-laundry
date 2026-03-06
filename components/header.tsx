'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-700">
              Sone Laundry
            </h1>
          </div>
 
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button className="bg-linear-to-b from-blue-700 to-blue-500 hover:bg-linear-to-t text-white cursor-pointer">
              Book Now
            </Button>
          </div>
 
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}