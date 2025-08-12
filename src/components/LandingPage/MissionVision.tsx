import {
  Globe2,
  Globe2Icon,
  HandshakeIcon,
  ShieldHalfIcon,
  SproutIcon,
} from "lucide-react";
import React from "react";

export default function MissionVision() {
  return (
    <section className="py-28 px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <span className="title-header">Mission, Vision & Values</span>
        <div className="flex justify-between mb-16 mt-2">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter">
              Our Purpose, <br /> Our Promise
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl self-center">
            Guided by a clear mission, inspired by a bold vision, and grounded
            in values that put our people, animals, and planet first.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 gap-8">
          {/* Our Mission Card */}
          <div className=" bg-[#E6F4E6] rounded-2xl p-10 shadow-sm border border-[#4E995033] min-h-56">
            <div className="flex items-start space-x-6">
              <div className="w-1/2 flex flex-col self-center">
                <div className="size-12 bg-[#4E9950] rounded-md flex items-center justify-center flex-shrink-0">
                  <SproutIcon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950 mt-3">
                  Our Mission
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  At New Mountain Farms Limited, we are on a journey that
                  encompasses sustainable livestock farming and food processing
                  in Nigeria. We cultivate thriving pastures, raise healthy
                  cattle, sheep, and goats, and produce high-quality beef,
                  dairy, and leather — all while caring for our land, our
                  people, and our future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className=" bg-[#E9F5FA] rounded-2xl p-10 shadow-sm border flex justify-center items-center flex-col border-[#2288A733] min-h-56">
            <div className="flex items-start justify-center space-x-6">
              <div className="w-1/2 flex flex-col self-center">
                <div className="size-12 bg-[#2288A7] rounded-md flex items-center justify-center flex-shrink-0">
                  <SproutIcon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950 mt-3">
                  Our Vision
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  To create a future where integrated pasture management powers
                  food security, empowers local communities, and protects the
                  environment across every step of the livestock value chain.
                </p>
              </div>
            </div>
          </div>

          {/* Our Core Values Card */}
          <div className=" bg-[#FFF7E5] overflow-clip rounded-2xl shadow-sm border flex items-start flex-col border-[#F5850B33]">
            <div className="flex items-start justify-between space-x-6 w-full">
              <div className="w-1/2 flex flex-col self-center ml-10">
                <div className="size-12 bg-[#F5850B] rounded-md flex items-center justify-center flex-shrink-0">
                  <SproutIcon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-950 mt-3">
                  Core Values
                </h3>
              </div>
              <div className="flex-1">
                <CoreValues />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CoreValues = () => {
  return (
    <div className="relative h-[30rem] w-[46rem] overflow-clip left-4">
      {/* Core Values Content */}
      <div className="absolute top-16  text-center bg-white flex flex-col items-center justify-center size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] z-40">
        <div className="size-12 bg-[#F5850B] rounded-md flex items-center justify-center flex-shrink-0">
          <HandshakeIcon className="size-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 my-3">Community</h4>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We work hand in hand with local farmers, families, and partners,
          growing together and sharing success.
        </p>
      </div>
      <div className="absolute -bottom-12 left-56 text-center bg-white flex flex-col items-center justify-center size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] z-30">
        <div className="size-12 bg-[#2F4F78] rounded-md flex items-center justify-center flex-shrink-0">
          <ShieldHalfIcon className="size-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 my-3">Integrity</h4>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We do what we say and deliver what we promise, with honesty, fairness,
          and respect.
        </p>
      </div>
      <div className="absolute -top-4 left-[26rem] text-center bg-white flex flex-col items-center justify-center size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] z-20">
        <div className="size-12 bg-[#2E7D32] rounded-md flex items-center justify-center flex-shrink-0">
          <Globe2Icon className="size-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 my-3">
          Sustainability
        </h4>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We farm with the future in mind, protecting our soil, water, and air
          for generations to come.
        </p>
      </div>
    </div>
  );
};
