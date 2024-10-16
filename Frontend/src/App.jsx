// importing navbar component which will be rendered across all routes
import Navbar from "./components/Navbar/Navbar.jsx";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import WishList from "./pages/WishList.jsx";
import Bag from "./pages/Bag.jsx";

function App() {
  return (
    <>
      {/* since Navbar component is rendered outside the Routes component it will be always shown regardless of which route is active */}
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/register"} element={<SignUp />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/wishlist"} element={<WishList />} />
        <Route path={"/bag"} element={<Bag />} />
      </Routes>
    </>
  );
}
export default App;
