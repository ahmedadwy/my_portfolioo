import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Ahmed Adwy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
