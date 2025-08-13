import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-secondary max-w-8xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="title-header">Gallery</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Our Story in Pictures
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into our pastures, livestock, and the people who make it
          possible.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-9 gap-4">
        <div className="md:col-span-2 md:row-span-5">
          {" "}
          <div className="relative h-64 md:min-h-96 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:row-span-4 md:col-start-3 max-sm:col-span-1 max-lg:col-span-2">
          {" "}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:row-span-4 md:col-start-4 max-lg:hidden">
          {" "}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-5 md:col-start-3 md:row-start-5">
          {" "}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:row-span-4 md:row-start-6 max-sm:col-span-1 max-lg:col-span-2">
          {" "}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="md:row-span-4 md:row-start-6 max-lg:hidden">
          {" "}
          <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/cattle-herd.jpg"
              alt="Main cattle herd"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
