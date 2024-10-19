import { Link } from "react-router-dom";

import { categories } from "./categories.js";

function DesktopNavDropDown({
  handleMouseEnter,
  handleMouseLeave,
  activeCategory,
}) {
  return (
    <div
      className="absolute left-[5%] top-18 pt-10 bg-white border border-gray-200 shadow-lg p-4 min-w-[90%] flex space-x-8  min-h-[70vh] z-40"
      onMouseEnter={() => handleMouseEnter(activeCategory)} // Keeps dropdown open when mouse enters
      onMouseLeave={handleMouseLeave} // Hides dropdown when mouse leaves
    >
      {categories[activeCategory].map((subcategory, subIndex) => {
        return (
          <div key={subIndex} className="mb-4">
            <span
              className={`font-bold text-sm ${
                category.name === "Men"
                  ? "text-red-500 "
                  : category.name === "Women"
                  ? "text-pink-500"
                  : "text-orange-500"
              }`}
            >
              <Link
                className="cursor-pointer"
                to={`/${category.name.toLowerCase()}/${subcategory.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                {subcategory.name}
              </Link>
            </span>

            <ul className=" space-y-2 mt-2 ">
              {subcategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={`/${category.name.toLowerCase()}/${subcategory.name
                      .toLowerCase()
                      .replace(/ /g, "-")}/${item
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-xs font-semibold text-gray-600 hover:text-black hover:font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default DesktopNavDropDown;
