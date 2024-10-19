import { useState } from "react";

import { categories } from "./categories.js";

import { Link } from "react-router-dom";

const DesktopNav = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  // rendering all top categories like men, women, kids from categories array

  return (
    <ul className="flex">
      {categories.map((category, i) => {
        return (
          <li
            key={i}
            className={`border-b-white font-semibold border-b-4 cursor-pointer px-4 lg:px-5 py-6 ${
              category.name === "Men"
                ? "hover:border-red-500 "
                : category.name === "Women"
                ? "hover:border-pink-500"
                : "hover:border-orange-500"
            }`}
          >
            <Link to={`/${category.name.toLowerCase()}`}>{category.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
