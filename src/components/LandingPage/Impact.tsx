import React from "react";

export default function Impact() {
  return (
    <section className="px-4 md:px-12 py-16 md:py-28 bg-secondary flex max-lg:flex-col justify-between items-center max-w-8xl mx-auto">
      {/* <div className=" mx-auto"> */}
      {/* Header */}
      <div className="mb-12 lg:min-w-1/2 max-lg:self-start">
        <div className="title-header mb-2">Impact We have made</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tighter mb-4">
          Our Impact, Your Trust
        </h2>
        <p className="text-gray-600 max-w-xl">
          Empowering farmers, caring for livestock, and strengthening
          communities across Nigeria.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-y-8 md:mx-0 lg:mx-auto max-lg:self-start pl-6 md:pl-0 lg:pl-6 w-5/6 md:min-w-full lg:min-w-1/2">
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
          <div className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
            30+
          </div>
          <div className="text-gray-600 text-sm">Communities Impacted</div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
