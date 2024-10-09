// src/components/Navbar.js
import React, { useState } from "react";
import NavTopCategories from "./NavTopCategories";
import NavDropDown from "./NavDropDown";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import MobileNav from "./MobileNav";
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
  const [profileDropDown, setPofileDropDown] = useState(false);

  const handleMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <>
      {/* Desktop Navbar  */}
      <div className="hidden md:block bg-white shadow-md border-gray-200 ">
        <nav className="flex px-6 items-center justify-between ">
          {/* Logo  */}
          <div className="font-bold">
            <Link to={"/"}>Logo </Link>
          </div>
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
              className="border border-gray-200 px-8 w-[300px] py-2 rounded-md text-sm placeholder-gray-400 focus:outline outline-gray-400 "
              placeholder="Search for products"
              style={{ fontSize: "12px" }} // Small placeholder text
            />
          </div>

          {/* Icons Section */}
          <div className="flex  space-x-6">
            {/* Profile icon */}

            <Link
              onMouseEnter={() => setPofileDropDown(true)}
              onMouseLeave={() => setPofileDropDown(false)}
              className="flex flex-col items-center justify-center cursor-pointer py-5  "
              to={"/profile"}
            >
              <FaUserCircle className="text-xl  " />
              <span className="text-xs font-bold">Profile</span>
            </Link>

            {/* Wishlist icon */}
            <Link
              to={"/wishlist"}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <AiOutlineHeart className="text-xl" />
              <span className="text-xs font-bold">Wishlist</span>
            </Link>

            {/* Bag icon */}
            <Link
              to={"/bag"}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <AiOutlineShoppingCart className="text-xl" />
              <span className="text-xs font-bold">Bag</span>
            </Link>
          </div>
        </nav>

        {/* listings all subcategories of topcategories in dropdown */}
        <NavDropDown
          categories={categories}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          activeCategory={activeCategory}
        />
        {/* Profile dropdown onhover profile you will dropdown which includes login and orders button  */}
        {profileDropDown && (
          <div
            className="absolute top-18 right-14 shadow-lg border   p-5 bg-white flex flex-col space-y-2"
            onMouseEnter={() => setPofileDropDown(true)}
            onMouseLeave={() => setPofileDropDown(false)}
          >
            <div className="text-sm font-bold">Welcome</div>
            <p className="font-semibold text-xs">
              To access account and manage orders
            </p>
            <button className="border border-gray-200 font-bold text-sm text-red-500 p-2 hover:border-red-600">
              <Link to={"/login"}>Login/SignUp</Link>
            </button>
            <button className="border border-gray-200 font-bold text-sm text-red-500 p-2 hover:border-red-600">
              <Link to={"/orders"}>Orders</Link>
            </button>
          </div>
        )}
      </div>
      {/* Mobile Navbar  */}
      <MobileNav categories={categories} />
    </>
  );
};

export default Navbar;
