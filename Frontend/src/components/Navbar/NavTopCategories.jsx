import { Link } from "react-router-dom";

function NavTopCategories({ handleMouseLeave, handleMouseEnter, categories }) {
  return (
    <div className="flex">
      {categories.map((category) => {
        return (
          <ul key={category.name}>
            <li
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              className={`border-b-white  font-semibold border-b-4  cursor-pointer px-4 lg:px-5 py-6 ${
                category.name === "Men"
                  ? "hover:border-red-500 "
                  : category.name === "Women"
                  ? "hover:border-pink-500"
                  : "hover:border-orange-500"
              }`}
            >
              <Link to={`/${category.name.toLowerCase()}`}>
                {category.name}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default NavTopCategories;
