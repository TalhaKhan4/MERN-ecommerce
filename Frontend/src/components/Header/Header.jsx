import { Link } from "react-router-dom";

// importing hooks
import { useState } from "react";

// importing other components
import Navbar from "../Navbar/Navbar.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown.jsx";

// importing icons
import { LiaUserSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";

// importing logo
import logo from "../../assets/images/logo-placeholder-image.png";

function Header() {
  const [profileDropDown, setProfileDropDown] = useState(false);

  return (
    <header className="bg-white px-3 md-lg:px-6 flex justify-between shadow-2xl sticky top-0 z-40 h-16 mb-[4.5rem] md:mb-0">
      {/* logo */}
      <Link to={"/"} className="flex items-center ml-8 md:ml-0">
        <img src={logo} className="w-24" alt="logo" />
      </Link>

      {/* It renders both laptop and mobile navbar */}
      <Navbar />

      <SearchBar />

      {/* Icons Section */}
      <div className="flex gap-3 md:gap-7">
        {/* Profile icon */}
        <Link
          to={"/profile"}
          onMouseEnter={() => setProfileDropDown(true)}
          onMouseLeave={() => setProfileDropDown(false)}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <LiaUserSolid style={{ fontSize: "28px" }} />
          <span className="hidden md:block text-xs font-bold relative top-[3px]">
            Profile
          </span>
        </Link>

        {/* Wishlist icon */}
        <Link
          to={"/wishlist"}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IoMdHeartEmpty
            style={{ fontSize: "25px" }}
            className="relative top-[1px]"
          />
          <span className="hidden md:block text-xs font-bold relative top-[5px]">
            Wishlist
          </span>
        </Link>

        {/* Bag icon */}
        <Link
          to={"/bag"}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <BsHandbag
            style={{ fontSize: "23px" }}
            className="relative bottom-[1px]"
          />
          <span className="hidden md:block text-xs font-bold relative top-[6px]">
            Bag
          </span>
        </Link>
      </div>

      {/* profileDropDown is a boolean state variable and when its value is true then we render the profile drop down otherwise we don't */}

      {profileDropDown && (
        <ProfileDropDown setProfileDropDown={setProfileDropDown} />
      )}
    </header>
  );
}

export default Header;
