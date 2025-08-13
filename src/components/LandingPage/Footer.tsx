import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-12 max-w-8xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <div className="flex flex-col items-start space-x-4 mb-6">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded"></div>
            </div>
            <span className="text-4xl font-semibold block">
              New Mountain Farms Limited
            </span>
          </div>
          <p className="text-white/90 text-sm max-w-md mb-6">
            Sustainable livestock farming for community and environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quicklinks</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Impact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h3 className="font-semibold mb-4">Contact & Location</h3>
          <div className="space-y-3 text-sm text-white/90">
            <div>
              <div className="font-medium">Address:</div>
              <div>
                Address: Flat 37A, Rockvale Manors, Rockvale Estate, Apo, FCT,
                Abuja.
              </div>
            </div>
            <div>
              <div className="font-medium">Website:</div>
              <div>www.NMFL.com.ng</div>
            </div>
            <div>
              <div className="font-medium">Phone:</div>
              <div>+234 812 345 6789 0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-white/90 mb-4 md:mb-0">
          © 2025 New Mountain Farms Limited. All rights reserved. | Terms |
          Privacy policy
        </div>

        {/* Social Links */}
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs">f</span>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs">t</span>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs">@</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
