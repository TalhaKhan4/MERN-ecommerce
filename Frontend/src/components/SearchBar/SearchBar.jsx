// importing icons

import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <form
      action=""
      className="flex justify-center items-center absolute md:static left-[50%] translate-x-[-50%] md:translate-x-0 top-[100%] w-full md:w-auto py-4 md:py-0 bg-gray-100 md:bg-transparent border-t-2 border-gray-200"
    >
      <div className="border border-transparent flex items-center gap-5 bg-white md:bg-gray-100 pl-3 rounded-3xl md:rounded-md w-[90vw] md:w-[250px] md-lg:w-[300px] lg:w-[380px]  focus-within:bg-white md:focus-within:border-gray-200 border-gray-300 md:border-transparent">
        <IoSearchSharp className="text-2xl text-gray-400" />

        <input
          placeholder="Search for products, brands and more"
          type="text"
          className="rounded-3xl md:rounded-md py-[10px] pr-3 pl-1 md:pl-0 bg-white md:bg-gray-100 w-[100%] outline-none text-sm placeholder:text-gray-500 text-gray-500 focus:bg-white"
        />
      </div>
    </form>
  );
}

export default SearchBar;
