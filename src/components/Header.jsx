import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <div class="w-full h-fit py-4 border-b border-teal-100">
      <div class="max-w-7xl mx-auto px-4 text-black flex justify-between items-center">
        <div class="text-xl font-bold">eCommerce App</div>
        <div class="flex">
          <input
            type="text"
            class="block w-full px-4 py-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button class="px-4 text-white bg-teal-600 border-l rounded ">
            Search
          </button>
        </div>
        <div class="flex">
          <button class="mx-4">
            <FiShoppingCart className="text-xl" />
          </button>
          <button class="mx-4">
            <FiUser className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
