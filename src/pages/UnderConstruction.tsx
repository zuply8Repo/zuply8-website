import React from "react";
import { Link } from "react-router-dom";
import underConstructionImage from "../assets/images/20250616_2143_Happy Bear Fishing_remix_01jxx46gqkfwy9mk0rzbw57eh6.png";

export default function UnderConstruction_homepage() {
  return (
    <main className="bg-black flex items-center justify-center px-4 py-4">
      <div className="bg-black border border-gray-700 shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col lg:flex-row lg:h-[calc(100vh-120px)]">
        {/* Image */}
        <div className="w-full lg:w-2/3 h-auto lg:h-full">
          <img
            src={underConstructionImage}
            alt="Under Construction"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 p-4">
          <Link
            to="/blog/post-1"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl w-full text-center"
          >
            Learn about the project!
          </Link>
          <Link
            to="/OurTeam"
            className="bg-white hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-xl w-full text-center"
          >
            Our Team
          </Link>
        </div>
      </div>
    </main>
  );
}
