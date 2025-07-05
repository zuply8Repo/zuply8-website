import React from "react";

interface SolutionBlockProps {
  title: string;
  description: React.ReactNode;
}

export function SolutionBlock({ title, description }: SolutionBlockProps) {
  return (
    <div className="p-4">
      <h2 className="text-h2 font-delivery text-center font-bold mb-2 lg:text-h2">
        <span>{title}</span>
      </h2>
      <p className="text-h3 font-delivery text-left lg:font-light lg:text-h3">
        {description}
      </p>
    </div>
  );
}
