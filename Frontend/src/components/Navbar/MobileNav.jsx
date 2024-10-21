import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import { categories } from "./categories.js";

import { IoCloseSharp } from "react-icons/io5";

function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu
  const [activeMobileCategory, setActiveMobileCategory] = useState(null); // For mobile dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCategory = (categoryName) => {
    setActiveMobileCategory((prev) =>
      prev === categoryName ? null : categoryName
    );
  };

  return (
    <div>
      <div className="flex items-center absolute top-[50%] translate-y-[-50%] left-[0.75rem]">
        {isMobileMenuOpen ? (
          <IoCloseSharp
            className="text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        ) : (
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        )}
      </div>

      {/* Mobile menu side bar */}

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-[100vw] xs-sm:w-[60vw] bg-gray-100 shadow-md border p-4 z-50 overflow-auto h-[calc(100vh-4rem)] scrollbar-hide">
          <ul className="mt-4">
            {categories.map((category) => (
              <li key={category.name} className="border-b border-gray-200 py-2">
                <div className="flex justify-between items-center cursor-pointer">
                  <span className="font-semibold">
                    <Link
                      className="hover:underline"
                      to={category.name.toLowerCase()}
                    >
                      {category.name}
                    </Link>
                  </span>
                  <span
                    onClick={() => toggleMobileCategory(category.name)}
                    className="font-bold text-xl"
                  >
                    {activeMobileCategory === category.name ? "−" : "+"}
                  </span>
                </div>
                {activeMobileCategory === category.name && (
                  <ul className="pl-2 mt-2">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.name} className="py-1">
                        <div className="cursor-pointer text-red-500  font-semibold text-sm flex justify-between hover:text-red-700">
                          <Link
                            className="hover:underline"
                            to={`/${category.name.toLowerCase()}/${subcategory.name
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                          >
                            {subcategory.name}
                          </Link>
                        </div>
                        <ul className="ml-4 mt-1">
                          {subcategory.items.map((item) => (
                            <li key={item} className="py-1 text-xs ">
                              <Link
                                className="text-sm font-medium text-gray-900 hover:text-black hover:font-semibold"
                                to={`/${category.name.toLowerCase()}/${subcategory.name
                                  .toLowerCase()
                                  .replace(/ /g, "-")}/${item
                                  .toLowerCase()
                                  .replace(/ /g, "-")}`}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
