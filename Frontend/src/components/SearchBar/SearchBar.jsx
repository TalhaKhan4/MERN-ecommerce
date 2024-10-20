// Don't edit or review this code I have already done it 20/10/2024

// importing icons
import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <form
      action=""
      className="flex justify-center items-center absolute md:static left-[0%] top-[100%] w-full md:w-auto py-4 md:py-0 bg-gray-100 md:bg-transparent border-t-2 border-gray-200 md:border-t-0"
    >
      {/* This div encloses both input and search icon */}
      <div className="flex items-center gap-5 bg-white md:bg-gray-100 md:focus-within:bg-white pl-3 rounded-3xl md:rounded-md w-[90vw] md:w-[250px] md-lg:w-[300px] lg:w-[380px] border border-gray-300 md:border-transparent md:focus-within:border-gray-300">
        <IoSearchSharp className="text-2xl text-gray-400" />

        <input
          placeholder="Search for products, brands and more"
          type="text"
          className="rounded-r-3xl md:rounded-md py-[10px] pr-3 bg-white md:bg-gray-100 md:focus:bg-white w-[100%] outline-none text-sm lg:text-base placeholder:text-gray-700 text-gray-700"
        />
      </div>
    </form>
  );
}

export default SearchBar;
