import { Link } from "react-router-dom";

// importing categories object
import { categories } from "./categories.js";

function DesktopNavDropDown({
  handleMouseEnter,
  handleMouseLeave,
  activeCategory,
}) {
  return (
    <div
      className="absolute left-[5%] top-[64px] pt-10 bg-white border border-gray-200 shadow-lg p-4 min-w-[90%] flex gap-8 min-h-[70vh]"
      onMouseEnter={() => handleMouseEnter(activeCategory)} // Keeps dropdown open when mouse enters
      onMouseLeave={handleMouseLeave} // Hides dropdown when mouse leaves
    >
      {categories[
        activeCategory === "Men" ? 0 : activeCategory === "Women" ? 1 : 2
      ].subcategories.map((subcategory, subIndex) => {
        return (
          <div key={subIndex} className="mb-4">
            <span
              className={`font-bold text-sm ${
                activeCategory === "Men"
                  ? "text-red-600 "
                  : activeCategory === "Women"
                  ? "text-pink-500"
                  : "text-orange-500"
              }`}
            >
              <Link
                className="cursor-pointer"
                to={`/${activeCategory.toLowerCase()}/${subcategory.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                {subcategory.name}
              </Link>
            </span>

            {/* This ul contains all the items under a category like Topwear etc */}

            <ul className="space-y-2 mt-2">
              {subcategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={`/${activeCategory.toLowerCase()}/${subcategory.name
                      .toLowerCase()
                      .replace(/ /g, "-")}/${item
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-xs font-semibold text-gray-900 hover:text-black hover:font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/*  */}
          </div>
        );
      })}
    </div>
  );
}

export default DesktopNavDropDown;
