import { BadgeCheck, LucideIcon, PawPrint, Sprout } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Journey() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-gray-50 overflow-hidden max-w-8xl mx-auto">
      {/* Header */}
      <div className="mb-12 md:mb-20 lg:mb-4 max-w-xl">
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

        <div className="grid md:grid-cols-6 md:grid-rows-6 max-sm:gap-y-4 gap-x-6 lg:gap-12">
          <div className="max-md:bg-white max-md:border-primary/30 max-md:border-2 max-md:rounded-md max-md:p-6 max-md:pt-12 max-md:pb-8 md:col-span-2 md:row-span-4 md:col-start-1 md:row-start-3">
            <StepCard
              number={1}
              title="Nurture Pastures"
              icon={Sprout}
              description="We carefully cultivate nutritious grasslands using sustainable practices, ensuring optimal soil health and biodiversity that provides premium nutrients for our animals throughout the year."
            />
          </div>
          <div className="max-md:bg-white max-md:border-primary/30 max-md:border-2 max-md:rounded-md max-md:p-6 max-md:pt-12 max-md:pb-8 md:col-span-2 md:row-span-4 md:col-start-3 md:row-start-2">
            <StepCard
              number={2}
              title="Raise Livestock"
              icon={PawPrint}
              description="Our cattle, sheep, and goats are raised in open, well‑managed fields where they roam freely, graze on nutritious grass, and receive proactive health care to maintain peak wellness and quality."
            />
          </div>
          <div className="max-md:bg-white max-md:border-primary/30 max-md:border-2 max-md:rounded-md max-md:p-6 max-md:pt-12 max-md:pb-8 md:col-span-2 md:row-span-4 md:col-start-5 md:row-start-1">
            <StepCard
              number={3}
              title={
                <span>
                  Deliver Quality <br className="max-md:hidden" /> Products
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
    <div className="relative px-0 lg:p-6">
      {/* Floating icon square with green diagonal accent */}
      <div className="absolute -top-6 lg:-top-3 lg:left-6">
        {/* green diagonal accent behind */}
        <div className="absolute -z-10 -left-2 -top-2 w-6 h-6 bg-primary rotate-45 rounded-sm" />
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>

      {/* Big faded step number */}
      <div className="pointer-events-none select-none absolute left-[calc(100%-5rem)] lg:left-[calc(100%-6rem)] -top-12 md:-top-36 lg:-top-32 text-[12rem] md:text-[9rem] lg:text-[11rem] font-bold text-primary/20 md:text-primary/60">
        {number}
      </div>

      {/* Content */}
      <div className="pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 max-w-[20ch]">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed lg:max-w-[30ch]">
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
