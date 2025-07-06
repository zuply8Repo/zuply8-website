import { useState } from "react";
import { X, Menu, ChevronRight } from "lucide-react"; // iconos

import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

import { LanguageSelector } from "./LanguageSelector";

// Puedes mover esto a otro archivo si quieres mantenerlo limpio
const menuItems = [
  { label: "Our Team", href: "/OurTeam" },
  { label: "Contact Us!", href: "/contact" },
  // Agrega más aquí
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="bg-white shadow px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <Link to="/">
            <img
              src={Logo} // Cambia al path correcto de tu logo
              alt="Solorz Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Horizontal menu for lg screens */}
        <nav className="hidden lg:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-gray-800 hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSelector />
      </header>

      {/* Overlay sidebar menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <img src={Logo} alt="Solorz Logo" className="h-12 w-auto" />
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-t text-lg font-semibold text-gray-900"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
