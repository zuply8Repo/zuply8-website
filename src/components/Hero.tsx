import React from "react";
import heroImage from "../images/Hero_background/pexels-redhaste-690598.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="bg-center bg-cover bg-left w-full h-[65vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black/60 px-4 md:px-12 lg:px-24 py-10 rounded-md text-center max-w-2xl">
          <h1 className="text-h2 md:text-h2 lg:text-xl text-white font-delivery font-bold mb-5">
            We engineer supply chain and operations solutions that drive your
            organization’s success
          </h1>
          <Link
            to="/contact"
            className="mt-3 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow"
          >
            Collaborate with Us!
          </Link>
        </div>
      </div>
      {/* Promotional card - only on lg screens */}
      <div className="hidden lg:block absolute left-20 bottom-11 bg-yellow-300 text-black p-6 rounded-lg shadow-xl max-w-xs">
        <h2 className="text-lg font-bold mb-2">
          Interested in scalable fulfillment?
        </h2>
        <p className="mb-4">Let’s talk and tailor a solution for your needs.</p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
