import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import WishList from "./pages/WishList";
import Bag from "./pages/Bag";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/register"} element={<SignUp />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/wishlist"} element={<WishList />} />
        <Route path={"/bag"} element={<Bag />} />
        <Route path={"/product/:productId"} element={<ProductPage />} />
      </Routes>
    </>
  );
}
export default App;
