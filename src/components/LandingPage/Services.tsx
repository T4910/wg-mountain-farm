import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-white mx-auto max-w-8xl">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* Header */}
      <div className="text-center mb-12">
        <div className="title-header mb-2">What We Offer</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Guided by a clear mission, inspired by a bold vision, and grounded in
          values that put our people, animals, and planet first.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-rows-3 max-lg:grid-rows-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Integrated Pasture Management"
          description="We create and maintain rich grazing lands that keep livestock healthy, improve soil quality, and protect the environment. Our approach blends tradition with modern techniques for lasting results."
          imageSrc="/cattle-herd.jpg"
          bg="bg-[#E6F4E6]"
        />
        <ServiceCard
          title="Livestock Grazing & Breeding"
          description="From cattle to sheep and goats, we raise strong, well-bred animals through responsible grazing and selective breeding—ensuring premium quality across generations."
          imageSrc="/cattle-herd.jpg"
          bg="bg-[#FFF7E5]"
          reverse
        />
        <ServiceCard
          title="Beef, Dairy & Leather Production"
          description="We process fresh, high‑quality beef, dairy, and leather with care—combining craft and consistency from pasture to marketplace."
          imageSrc="/cattle-herd.jpg"
          bg="bg-[#E9F5FA]"
        />
      </div>
      {/* </div> */}
    </section>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  bg: string;
  reverse?: boolean;
};

function ServiceCard({
  title,
  description,
  imageSrc,
  bg,
  reverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={`${bg} rounded-2xl p-4 pb-6 flex row-span-6 lg:row-span-12 ${
        reverse
          ? "flex-col md:flex-col-reverse md:row-start-4 md:col-start-2 lg:row-start-auto lg:col-start-auto"
          : "flex-col"
      } items-start shadow-sm hover:shadow-md transition-shadow gap-6`}
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl bg-white/70">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div>
        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Learn more */}
        <Button
          variant="link"
          className="mt-2 p-0 text-primary hover:text-green-800 inline-flex items-center gap-2"
        >
          <span className="font-medium">Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
