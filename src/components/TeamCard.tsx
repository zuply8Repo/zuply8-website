import React from "react";

interface CardProps {
  children: React.ReactNode;
  teamImage: string;
}

export default function TeamCard({ teamImage, children }: CardProps) {
  return (
    <div className="m-6 border-2 border-gray-200 rounded-xl shadow-lg p-4 bg-white max-w-md mx-4 md:mx-8 lg:mx-12">
      <div className="flex flex-col items-center">
        <img
          src={teamImage}
          className="w-[230px] h-[261px] object-scale-down rounded-md"
        />
        <div className="mt-4 text-sm text-justify">{children}</div>
      </div>
    </div>
  );
}
