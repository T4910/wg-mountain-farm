import { Button } from "@/components/ui/button";
import { CalendarIcon, LocationEditIcon, PawPrintIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  const a = true;

  if (a)
    return (
      <section className="flex items-stretch gap-12 max-md:flex-col-reverse px-4 md:px-12 py-16 md:py-28 max-w-8xl mx-auto">
        <div className="relative md:flex-1 rounded-2xl max-md:h-80 max-md:w-full max-lg:hidden">
          <Image
            src="/cattle-herd.jpg"
            className="h-full w-auto object-cover rounded-2xl"
            alt="Hero"
            fill
          />
        </div>
        <div className=" w-full md:w-2/3 lg:w-1/2 h-full grid place-content-center max-lg:grow">
          <div className="space-y-4">
            {/* Section Header */}
            <div className="title-header">About Us</div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter">
                Rooted in Tradition,
                <br />
                Growing for the Future
              </h2>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                Founded in 2025, New Mountain Farms Limited is an integrated
                livestock farm in the heart of Abuja. We are committed to
                raising healthy cattle, sheep, and goats using sustainable
                pasture management practices that protect our land and support
                our community. Through a combination of traditional methods and
                innovations, we produce high-quality beef, dairy, and leather
                while empowering local farmers and ensuring food security for
                generations to come.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Button variant="outline" className="px-4 py-5">
                Learn More
              </Button>
            </div>
            {/* Stats Section */}
            <Stats />
          </div>
        </div>
      </section>
    );

  // Come back to investigate why yours didn't work
  return (
    <section className="flex items-stretch gap-2 max-md:flex-col-reverse lg:gap-4">
      <div className="relative md:flex-1 rounded-2xl max-md:h-80 max-md:w-full">
        <Image
          src="/images/coworkers.jpg"
          className="h-full w-auto object-cover rounded-2xl"
          alt="Hero"
          fill
        />
      </div>

      {/* Right side - Content */}
      <div className="space-y-4">
        {/* Section Header */}
        <div className="title-header">About Us</div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter">
            Rooted in Tradition,
            <br />
            Growing for the Future
          </h2>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Founded in 2025, New Mountain Farms Limited is an integrated
            livestock farm in the heart of Abuja. We are committed to raising
            healthy cattle, sheep, and goats using sustainable pasture
            management practices that protect our land and support our
            community. Through a combination of traditional methods and
            innovations, we produce high-quality beef, dairy, and leather while
            empowering local farmers and ensuring food security for generations
            to come.
          </p>
        </div>

        {/* Learn More Button */}
        <div className="pt-4">
          <Button variant="outline" className=" px-6 py-2">
            Learn More
          </Button>
        </div>
        {/* Stats Section */}
        <Stats />
      </div>
    </section>
  );
}

const Stats = () => {
  return (
    <div className="flex flex-wrap gap-y-10 gap-x-2 md:gap-6 mt-12 w-full md:w-3/4 lg:w-auto">
      {/* 2025 - Established */}
      <div className="flex items-start space-x-4 flex-1">
        <div className="w-1 h-full bg-accent rounded-none"></div>
        <div className="flex-1">
          <div className="size-12 bg-[#E4F1FA] grid place-items-center rounded-md mb-3">
            <CalendarIcon className="size-6 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">2025</div>
          <div className="text-gray-600 text-sm">Established</div>
        </div>
      </div>

      {/* Abuja - Location */}
      <div className="flex items-start space-x-4 flex-1">
        <div className="w-1 h-full bg-blue-400 rounded-none"></div>
        <div className="flex-1">
          <div className="size-12 bg-[#E4F1FA] grid place-items-center rounded-md mb-3">
            <LocationEditIcon className="size-6 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">Abuja</div>
          <div className="text-gray-600 text-sm">Location</div>
        </div>
      </div>

      {/* 3 - Livestock Variety */}
      <div className="flex items-start space-x-4 flex-1">
        <div className="w-1 h-full bg-accent rounded-none"></div>
        <div className="flex-1">
          <div className="size-12 bg-[#E4F1FA] grid place-items-center rounded-md mb-3">
            <PawPrintIcon className="size-6 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold text-gray-900 mb-1">3</div>
          <div className="text-gray-600 text-sm">Livestock Variety</div>
        </div>
      </div>
    </div>
  );
};
