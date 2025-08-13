import React from "react";

export default function Impact() {
  return (
    <section className="py-16 px-12 bg-secondary flex max-md:flex-col justify-between items-center gap-28 max-w-8xl mx-auto">
      {/* <div className=" mx-auto"> */}
      {/* Header */}
      <div className="mb-12">
        <div className="title-header mb-2">Impact We have made</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Our Impact, Your Trust
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Empowering farmers, caring for livestock, and strengthening
          communities across Nigeria.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 gap-y-8 mx-auto lg:min-w-xl">
        {/* Stat 1 */}
        <div className="">
          <div className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
            7,532
          </div>
          <div className="text-gray-600 text-sm">Acres Managed</div>
        </div>

        {/* Stat 2 */}
        <div className="">
          <div className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
            500+
          </div>
          <div className="text-gray-600 text-sm">Livestock</div>
        </div>

        {/* Stat 3 */}
        <div className="">
          <div className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
            120+
          </div>
          <div className="text-gray-600 text-sm">Farmers Supported</div>
        </div>

        {/* Stat 4 */}
        <div className="">
          <div className="text-4xl md:text-5xl font-semibold text-green-600 mb-2">
            30+
          </div>
          <div className="text-gray-600 text-sm">Communities Impacted</div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
