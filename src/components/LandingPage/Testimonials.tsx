import React from "react";
import ReviewsCarousel from "./ReviewCarousel";

export default function Testimonials() {
  return (
    <section className="py-16 px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
            Reviews You Can Trust
          </h2>
        </div>

        {/* Testimonials */}
        <ReviewsCarousel />
      </div>
    </section>
  );
}
