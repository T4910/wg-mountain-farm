import React from "react";
import ReviewsCarousel from "./ReviewCarousel";

export default function Testimonials() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-white max-w-8xl mx-auto">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Reviews You Can Trust
        </h2>
      </div>

      {/* Testimonials */}
      <ReviewsCarousel />
      {/* </div> */}
    </section>
  );
}
