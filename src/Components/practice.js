import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">MongoDB</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Products
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Resources
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Solutions
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Company
          </a>
        </div>
        <div>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            MongoDB University
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Pricing
          </a>
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:shadow-outline-blue font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2">
            Sign Up
          </button>
          <button className="block mt-4 lg:inline-block lg:mt-0 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// Header - containing the MongoDB logo, "Coming Soon!" banner, and sign-up button.
// Main Navigation - containing the navigation links for Products, Resources, Solutions, Company, MongoDB University, Certifications, and Pricing.
// Learning Section - containing the "Learn MongoDB and Advance Your Career" heading, free courses, hands-on labs and quizzes, and the "Begin Your Interactive Learning of MongoDB" button.
// Featured Learning - containing the "Introduction to MongoDB" and "Atlas Essentials" course tiles.
// Learning Paths - containing the "MongoDB Data Modeling Path" and "Self-Managed Database Admin" course tiles.
// MongoDB University - containing the "100% online", "24/7 access", "150+ free learning resources", and "Certification Access" badge.
// Learner Journey - containing the "View Learner Journey" button.
// Footer - c