import { BadgeCheck, LucideIcon, PawPrint, Sprout } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Journey() {
  return (
    <section className="py-16 px-12 bg-gray-50 overflow-hidden max-w-8xl mx-auto">
      {/* Header */}
      <div className="mb-4 max-w-xl">
        <div className="title-header">How We Work</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Our Journey from Grass to Greatness
        </h2>
        <p className="text-gray-600 max-w-lg">
          See how we transform lush pastures into premium livestock products
          through care, sustainability, and innovation.
        </p>
      </div>

      {/* Journey Steps */}
      <div className="relative">
        {/* Floating Green Line */}
        <div className="absolute -left-48 -top-42">
          <SVGline />
        </div>

        <div className="grid grid-cols-6 grid-rows-6 gap-12">
          <div className="col-span-2 row-span-4 col-start-1 row-start-3">
            <StepCard
              number={1}
              title="Nurture Pastures"
              icon={Sprout}
              description="We carefully cultivate nutritious grasslands using sustainable practices, ensuring optimal soil health and biodiversity that provides premium nutrients for our animals throughout the year."
            />
          </div>
          <div className="col-span-2 row-span-4 col-start-3 row-start-2">
            <StepCard
              number={2}
              title="Raise Livestock"
              icon={PawPrint}
              description="Our cattle, sheep, and goats are raised in open, well‑managed fields where they roam freely, graze on nutritious grass, and receive proactive health care to maintain peak wellness and quality."
            />
          </div>
          <div className="col-span-2 row-span-4 col-start-5 row-start-1">
            <StepCard
              number={3}
              title={
                <span>
                  Deliver Quality <br /> Products
                </span>
              }
              icon={BadgeCheck}
              description="From beef and dairy to premium leather, every product is processed with care and traceable to its source. We combine modern techniques with traditional values to deliver only the best."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type StepCardProps = {
  number: number;
  title: string | ReactNode;
  description: string;
  icon: LucideIcon;
};

function StepCard({ number, title, description, icon: Icon }: StepCardProps) {
  return (
    <div className="relative p-6 overflow- bg-whte">
      {/* Floating icon square with green diagonal accent */}
      <div className="absolute -top-3 left-6">
        {/* green diagonal accent behind */}
        <div className="absolute -z-10 -left-2 -top-2 w-6 h-6 bg-primary rotate-45 rounded-sm" />
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>

      {/* Big faded step number */}
      <div className="pointer-events-none select-none absolute left-52 -top-24 text-6xl md:text-[11rem] font-bold text-primary/60">
        {number}
      </div>

      {/* Content */}
      <div className="pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 max-w-[20ch]">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-[30ch]">
          {description}
        </p>
      </div>
    </div>
  );
}

const SVGline = () => {
  return (
    <Image
      src="/llline.svg"
      alt="Decorative line"
      layout="fill"
      objectFit="contain"
    />
  );
};
