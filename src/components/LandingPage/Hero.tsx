import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[105vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.jpg"
          alt="Cattle grazing in mountain pasture"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>

      {/* Navigation Header */}
      <nav className="relative container z-10 flex items-center justify-between px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-600 rounded" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-[#5C5D5E]">
          <a href="#" className="hover:text-blue-200 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Partner With Us Button */}
        <Button className="">Partner With Us</Button>
      </nav>

      {/* Hero Content */}
      <div className="relative container z-10 flex flex-col items-start  min-h-[calc(100vh-80px)] px-12 max-w-4xl">
        <div className="space-y-4">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tighter mt-12">
            Revolutionizing Sustainable
            <br />
            Livestock Farming
          </h1>

          {/* Subtitle */}
          <p className="md:text-lg text-black/90 max-w-2xl leading-relaxed">
            Integrated pasture management, livestock breeding, and premium
            products — grown with care for community and environment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 pt-6">
            <Button size="lg" className="py-6 px-8 text-lg">
              Partner With Us →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary border-2 text-primary py-6 px-8 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
