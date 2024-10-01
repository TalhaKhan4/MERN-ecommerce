function NavDropDown({
  categories,
  handleMouseEnter,
  handleMouseLeave,
  activeCategory,
}) {
  return (
    <>
      {categories.map((category, index) =>
        activeCategory === category.name ? (
          <div
            key={index}
            className="absolute left-[5%] top-6 pt-10 bg-white border border-gray-200 shadow-lg  p-4 min-w-[90vw] flex space-x-8 -z-10 min-h-[70vh]"
            onMouseEnter={() => handleMouseEnter(category.name)} // Keeps dropdown open when mouse enters
            onMouseLeave={handleMouseLeave} // Hides dropdown when mouse leaves
          >
            {category.subcategories.map((subcategory, subIndex) => {
              return (
                <div key={subIndex} className="mb-4">
                  <span className="text-red-600 font-bold text-sm">
                    {subcategory.name}
                  </span>
                  <ul className=" space-y-2 mt-2 ">
                    {subcategory.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={`/${category.name.toLowerCase()}/${subcategory.name
                            .toLowerCase()
                            .replace(/ /g, "-")}/${item
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="text-xs font-semibold text-gray-600 hover:text-black hover:font-bold"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}

export default NavDropDown;
