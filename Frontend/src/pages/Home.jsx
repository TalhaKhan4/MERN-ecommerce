import { useEffect, useState } from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store";
import Slider from "../components/Slider/Slider";
function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchDummyProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=18", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
      }
      if (res.ok) {
        setProducts(data.products);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchDummyProducts();
  }, []);
  return (
    <>
      <Slider />
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 md:p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[30%]  md:w-[20%] lg:w-[15%]  border border-gray-300 rounded-lg shadow-md p-2 flex flex-col justify-between "
          >
            {/* wishlist  */}
            <div className=" flex justify-end items-center  ">
              <button
                onClick={() => navigate("/login")}
                className="text-gray-200  hover:text-red-500 transition-transform hover:scale-150"
              >
                <FaHeart className="w-4 h-4" />
              </button>
            </div>
            {/* Product Image */}
            <img
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.thumbnail}
              alt={product.title}
              className="w-auto h-auto  object-cover cursor-pointer transition-transform ease-in-out hover:scale-95"
            />

            {/* Product Details */}
            <div className="mt-1">
              <h3 className="text-xs md:text-sm font-bold text-gray-400">
                {product.brand}
              </h3>
              <h3 className="text-[10px] sm:text-xs md:text-sm font-bold">
                {product.title}
              </h3>
            </div>

            {/*  product price  and Add to Bag button */}
            <div className="mt-2  flex justify-between items-center  ">
              <p className="text-xs md:text-sm font-semibold mt-1">
                ${product.price}
              </p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="text-gray-300  hover:text-green-500 transition-transform hover:scale-125"
              >
                <FaShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
