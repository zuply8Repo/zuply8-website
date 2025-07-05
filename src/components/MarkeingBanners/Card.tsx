import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  children: React.ReactNode;
  buttonLabel: string;
  onClick?: () => void;
  variant?: "blue" | "orange";
}

export default function Card({
  children,
  buttonLabel,
  variant = "blue",
}: CardProps) {
  const styles = {
    blue: {
      container: "bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] text-[#f1f5f9]",
      button: "bg-[#f97316] hover:bg-orange-600",
    },
    orange: {
      container: "bg-gradient-to-b from-[#f97316] to-[#ea580c] text-white",
      button: "bg-[#1e3a8a] hover:bg-blue-900",
    },
  };

  return (
    <div
      className={`mt-6 rounded-2xl p-6 shadow-md max-w-md lg:text-center ${styles[variant].container}`}
    >
      <div className="text-lg font-medium mb-4 leading-relaxed">{children}</div>
      <Link
        to="/contact"
        className={`${styles[variant].button} text-white font-semibold px-4 py-2 rounded-xl`}
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
