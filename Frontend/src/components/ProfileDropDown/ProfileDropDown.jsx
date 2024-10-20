import { Link } from "react-router-dom";

function ProfileDropDown({ setProfileDropDown }) {
  return (
    <div
      className="hidden md:flex flex-col gap-2 absolute top-[64px] right-[45px] shadow-lg border p-5 bg-white"
      onMouseEnter={() => setProfileDropDown(true)}
      onMouseLeave={() => setProfileDropDown(false)}
    >
      <p className="text-sm font-bold text-center">Welcome</p>

      <p className="font-semibold text-xs">
        To access account and manage orders
      </p>

      <button className="border border-gray-200 font-bold text-sm text-red-500 p-2 hover:border-red-600">
        <Link to={"/login"}>Login/SignUp</Link>
      </button>

      <button className="border border-gray-200 font-bold text-sm text-red-500 p-2 hover:border-red-600">
        <Link to={"/orders"}>Orders</Link>
      </button>
    </div>
  );
}

export default ProfileDropDown;
