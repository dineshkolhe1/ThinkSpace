import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              ThinkSpace
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              A simple and powerful note-taking platform designed to help you
              organize ideas, boost productivity, and manage your daily tasks efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">My Notes</li>
              <li className="hover:text-white cursor-pointer">Create Note</li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-3">
              Contact
            </h3>
            <p className="text-sm text-gray-400">
              Email: support@thinkspace.com
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Built with ❤️ using MERN Stack
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ThinkSpace. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
