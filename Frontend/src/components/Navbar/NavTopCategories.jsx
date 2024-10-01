function NavTopCategories({ handleMouseLeave, handleMouseEnter, categories }) {
  return (
    <div className="flex">
      {categories.map((category) => {
        return (
          <ul key={category.name}>
            <li
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
              className={`border-b-white  font-semibold border-b-4  cursor-pointer px-5 pb-4    ${
                category.name === "Men"
                  ? "hover:border-red-500 "
                  : category.name === "Women"
                  ? "hover:border-pink-500"
                  : "hover:border-orange-500"
              }`}
            >
              {category.name}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default NavTopCategories;
