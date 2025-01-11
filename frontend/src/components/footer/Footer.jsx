import React from "react";

function Footer() {
  return (
    <footer className="bg-[#6085ef] text-gray-300 mt-[200px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h3 className="text-white text-xl font-bold">MyBrand</h3>
            <p className="mt-4">
              Creating impactful digital experiences for businesses worldwide.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-white font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
