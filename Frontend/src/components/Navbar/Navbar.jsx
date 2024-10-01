// src/components/Navbar.js
import React, { useState } from "react";
import NavTopCategories from "./NavTopCategories";
import NavDropDown from "./NavDropDown";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
const categories = [
  {
    name: "Men",
    subcategories: [
      {
        name: "Topwear",
        items: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Sweaters",
          "Jackets",
        ],
      },
      {
        name: "Bottomwear",
        items: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts"],
      },
      {
        name: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Socks",
        ],
      },
      {
        name: "Gadgets",
        items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
      },
      {
        name: "Fashion Accessories",
        items: [
          "Wallets",
          "Belts",
          "Perfumes & Body Mists",
          "Trimmers",
          "Deodorants",
          "Ties, Cufflinks & Pocket Squares",
          "Accessory Gift Sets",
          "Caps & Hats",
          "Mufflers, Scarves & Gloves",
          "Phone Cases",
          "Rings & Wristwear",
          "Helmets",
        ],
      },
    ],
  },
  {
    name: "Women",

    subcategories: [
      {
        name: "Western Wear",
        items: ["Tops", "Dresses", "Jeans"],
      },
      // Add more subcategories
    ],
  },
  {
    name: "Kids",
    subcategories: [
      {
        name: "Boys Clothing",
        items: ["T-Shirts", "Shorts", "Jeans"],
      },
    ],
  },
];

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <>
      <div className="bg-white shadow-md border-gray-200 p-4 pb-0  ">
        <nav className="flex space-x-10 px-2 justify-evenly w-[100%]">
          {/* Logo  */}
          <div className="w-[10%]">logo</div>
          {/* listing top categories names  like men women etc */}
          <NavTopCategories
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            categories={categories}
          />

          {/* Search bar */}
          <div>
            <input
              type="text"
              className="border border-gray-400 px-3 py-1 rounded-md text-sm placeholder-gray-400 focus:outline-none "
              placeholder="Search for products"
              style={{ fontSize: "12px" }} // Small placeholder text
            />
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-6">
            {/* Profile icon */}
            <div className="flex flex-col items-center justify-center">
              <FaUserCircle className="text-xl cursor-pointer " />
              <span className="text-xs font-bold">Profile</span>
            </div>

            {/* Wishlist icon */}
            <div className="flex flex-col items-center justify-center">
              <AiOutlineHeart className="text-xl cursor-pointer " />
              <span className="text-xs font-bold">Wishlist</span>
            </div>

            {/* Bag icon */}
            <div className="flex flex-col items-center justify-center">
              <AiOutlineShoppingCart className="text-xl cursor-pointer " />
              <span className="text-xs font-bold">Bag</span>
            </div>
          </div>
        </nav>

        {/* listings all subcategories of topcategories in dropdown */}
        <NavDropDown
          categories={categories}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          activeCategory={activeCategory}
        />
      </div>
    </>
  );
};

export default Navbar;
