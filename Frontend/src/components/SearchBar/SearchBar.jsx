// importing icons

import { IoSearchSharp } from "react-icons/io5";

function SearchBar() {
  return (
    <form action="">
      <div className="border border-transparent flex items-center gap-5 bg-gray-100 pl-3 rounded-md w-[380px] focus-within:bg-white focus-within:border-gray-200">
        <IoSearchSharp className="text-2xl text-gray-400" />

        <input
          placeholder="Search for products, brands and more"
          type="text"
          className="rounded-md py-[10px] pr-3 bg-gray-100 w-[100%] outline-none text-sm placeholder:text-gray-500 text-gray-500 focus:bg-white"
        />
      </div>
    </form>
  );
}

export default SearchBar;
