import React from "react";

import Logo from "../images/Hero_background/logo_solorz.png";
import { Link } from "react-router-dom";

const menuGroups = [
  [
    { label: "Cookies", to: "/cookies" },
    { label: "Contact Us!", to: "/contact" },
  ],
  [{ label: "Our Team", to: "/OurTeam" }],
  // Add more menu groups/columns here
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] px-6 items-center justify-center text-[#f1f5f9] ">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <img src={Logo} alt="Solorz Logo" className="h-10 mb-6" />

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6">
          {menuGroups.map((group, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {group.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className="underline hover:text-orange-400 block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
