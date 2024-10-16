import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { IoClose } from "react-icons/io5";

function MobileNav({ categories }) {
  const location = useLocation();

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
      {/* Mobile Navbar */}
      <div className="md:hidden p-4 bg-white border-b shadow-md flex justify-between items-center">
        <div className="flex space-x-4">
          {isMobileMenuOpen ? (
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
          <div className="font-bold">
            <Link to={"/"}>Logo</Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to={"/profile"}>
            <FaUserCircle className="text-xl cursor-pointer" />
          </Link>
          <Link to={"/wishlist"}>
            <AiOutlineHeart className="text-xl cursor-pointer" />
          </Link>
          <Link to={"/bag"}>
            <AiOutlineShoppingCart className="text-xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div
        className={` md:hidden ${
          location.pathname != "/" && "hidden"
        } mt-4 w-fit mx-auto shadow-lg border  rounded-3xl overflow-hidden`}
      >
        <input
          type="text"
          className=" border-gray-200 px-8 w-[300px] py-2 rounded-md text-sm placeholder-gray-400 focus:outline outline-gray-400 "
          placeholder="Search for products"
          style={{ fontSize: "12px" }} // Small placeholder text
        />
      </div>

      {/*Mobile menu  side bar  */}
      {isMobileMenuOpen && (
        <div className=" md:hidden absolute top-14 left-0 w-[60vw] bg-gray-100 shadow-md border p-4 z-20 overflow-auto min-h-[90vh]">
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
                    className="font-bold text-lg"
                  >
                    {activeMobileCategory === category.name ? "-" : "+"}
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
                                className="hover:underline hover:text-gray-400"
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
