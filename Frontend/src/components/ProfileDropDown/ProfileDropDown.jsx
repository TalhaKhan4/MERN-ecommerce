import { Link } from "react-router-dom";

function ProfileDropDown({ setProfileDropDown }) {
  return (
    <div
      className="hidden md:flex absolute top-[64px] right-[45px] shadow-lg border p-5 bg-white flex-col space-y-2"
      onMouseEnter={() => setProfileDropDown(true)}
      onMouseLeave={() => setProfileDropDown(false)}
    >
      <div className="text-sm font-bold text-center">Welcome</div>

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
