import {
  Globe2Icon,
  HandshakeIcon,
  ShieldHalfIcon,
  SproutIcon,
} from "lucide-react";
import React from "react";

export default function MissionVision() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-secondary max-w-8xl mx-auto">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* Header */}
      <span className="title-header">Mission, Vision & Values</span>
      <div className="flex max-lg:flex-col justify-between items-start md:items-center mb-8 md:mb-16 mt-2 max-lg:gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter">
            Our Purpose, <br className="max-lg:hidden" /> Our Promise
          </h2>
        </div>
        <p className="text-gray-600 max-w-xl lg:self-center">
          Guided by a clear mission, inspired by a bold vision, and grounded in
          values that put our people, animals, and planet first.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 gap-8">
        {/* Our Mission Card */}
        <div className=" bg-[#E6F4E6] rounded-2xl p-10 max-md:px-6 flex justify-center items-center flex-col shadow-sm border border-[#4E995033] min-h-56">
          <div className="flex max-lg:flex-col max-lg:gap-3 items-start space-x-6">
            <div className="w-fit md:w-1/2 flex lg:flex-col lg:self-center gap-2 md:items-center lg:items-start max-lg:gap-4">
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
                encompasses sustainable livestock farming and food processing in
                Nigeria. We cultivate thriving pastures, raise healthy cattle,
                sheep, and goats, and produce high-quality beef, dairy, and
                leather — all while caring for our land, our people, and our
                future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Card */}
        <div className=" bg-[#E9F5FA] rounded-2xl p-10 max-md:px-6 flex justify-center items-center flex-col shadow-sm border border-[#2288A733] min-h-56">
          <div className="flex max-lg:flex-col max-lg:gap-3 items-start space-x-6">
            <div className="w-fit md:w-1/2 flex lg:flex-col lg:self-center gap-2 md:items-center lg:items-start max-lg:gap-4">
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
        {/* <div className=" bg-[#FFF7E5] overflow-clip rounded-2xl shadow-sm border flex items-start flex-col border-[#F5850B33]">
          <div className="flex max-lg:flex-col  max-lg:gap-3 items-start justify-between space-x-6 w-full">
            <div className="w-fit md:w-1/2 flex lg:flex-col lg:self-center gap-2 md:gap-4 p-10 pt-10">
              <div className="size-12 bg-[#F5850B] rounded-md flex items-center justify-center flex-shrink-0">
                <SproutIcon className="size-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mt-3">
                Core Values
              </h3>
            </div>
            <div className="flex-1 w-full grid place-items-center-safe">
              <CoreValues />
            </div>
          </div>
        </div> */}
      </div>
      {/* </div> */}
    </section>
  );
}

const CoreValues = () => {
  return (
    <div className="relative h-[47rem] md:h-[30rem] w-[46rem] max-lg:scale-90 max-lg:-top-8 lg:left-4 mx-auto">
      {/* Core Values Content */}
      <div className="absolute top-4 md:top-16 text-center max-md:left-6 bg-white flex flex-col items-center justify-center size-96 md:size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] z-40">
        <div className="size-12 bg-[#F5850B] rounded-md flex items-center justify-center flex-shrink-0">
          <HandshakeIcon className="size-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 my-3">Community</h4>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We work hand in hand with local farmers, families, and partners,
          growing together and sharing success.
        </p>
      </div>
      <div className="absolute -bottom-20 md:-bottom-8 left-12 md:left-56 text-center bg-white flex flex-col items-center justify-center size-96 md:size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] x-10 md:z-30">
        <div className="size-12 bg-[#2F4F78] rounded-md flex items-center justify-center flex-shrink-0">
          <ShieldHalfIcon className="size-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-900 my-3">Integrity</h4>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We do what we say and deliver what we promise, with honesty, fairness,
          and respect.
        </p>
      </div>
      <div className="absolute top-56 md:-top-4  md:left-[26rem] text-center bg-white flex flex-col items-center justify-center size-96 md:size-80 p-7 rounded-full shadow-[4px_4px_16px_0px_rgba(0,0,0,0.08)] z-20">
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
