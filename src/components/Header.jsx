import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import { getItemCount } from "../utils";
import { fetchAllCategories } from "../features/categories-slice";

const Header = () => {
  const cartItems = useSelector((state) => state.cart?.value);
  const cartCount = getItemCount(cartItems);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const categories = useSelector((state) => state.categories?.value);
  const dispatch = useDispatch();
  const category = searchParams.get("category"); // getting category from url param

  const [selectedCategory, setSelectedCategory] = useState("");

  // set default category to "all" if no category is selected
  useEffect(() => {
    setSelectedCategory(category ? category : "all");
  }, [category]);

  if (!categories.length) {
    dispatch(fetchAllCategories());
  }

  // url param update fn
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    navigate(value === "all" ? "/" : `/?category=${value}`);
  };

  return (
    <div className="w-full h-fit py-4 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 text-black flex justify-between items-center">
        <div className="text-xl font-bold">eCommerce App</div>
        <form className="flex">
          <select
            id="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="bg-teal-200 border border-teal-500 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
          >
            <option defaultValue>all</option>
            <option defaultValue="US">electronics</option>
            <option defaultValue="CA">jewelery</option>
            <option defaultValue="FR">men's clothing</option>
            <option defaultValue="DE">women's clothing</option>
          </select>
          {/* <input
            type="search"
            className="block w-full px-4 py-2 text-teal-700 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          /> */}
          <button
            type="submit"
            className="px-4 text-white bg-teal-600 border-l rounded"
          >
            Search
          </button>
        </form>
        <div className="flex">
          <button
            className="mx-4 relative border-2 border-transparent text-gray-800 rounded-full"
            aria-label="Cart"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute inset-0 object-right-top -mr-6">
              <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-teal-500 text-white">
                {cartCount}
              </div>
            </span>
          </button>
          <button className="mx-4">
            <FiUser className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
