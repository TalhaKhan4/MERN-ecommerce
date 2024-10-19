import { useState } from "react";

import { categories } from "./categories.js";

import { Link } from "react-router-dom";
import DesktopNavDropDown from "./DesktopNavDropDown.jsx";

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
    <>
      <ul className="flex items-center h-full">
        {categories.map((category, i) => {
          return (
            <li
              key={i}
              className={`border-b-white font-semibold border-b-4 h-full flex items-center cursor-pointer md:px-2 md-lg:px-3 lg:px-5 ${
                category.name === "Men"
                  ? "hover:border-red-500 "
                  : category.name === "Women"
                  ? "hover:border-pink-500"
                  : "hover:border-orange-500"
              }`}
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {activeCategory !== null && (
        <DesktopNavDropDown
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          activeCategory={activeCategory}
        />
      )}
    </>
  );
};

export default DesktopNav;
