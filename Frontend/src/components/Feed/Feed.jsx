// importing hooks
import { useState, useEffect } from "react";

// importing other components
import ProductCard from "../ProductCard/ProductCard.jsx";

function Feed() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const productsRenderCount = 8;

  function displayMoreProducts() {
    const nextBatch = currentBatch + 1;

    setDisplayedProducts((prevProducts) => [
      ...prevProducts,
      ...allProducts.slice(
        currentBatch * productsRenderCount,
        nextBatch * productsRenderCount > allProducts.length
          ? allProducts.length
          : nextBatch * productsRenderCount
      ),
    ]);

    setCurrentBatch(nextBatch);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();

        setAllProducts(data); // After loading all the products we are updating the allProducts state variable

        setDisplayedProducts(data.slice(0, productsRenderCount));
        setCurrentBatch(1);
      } catch (error) {
        console.error("Error fetching products :", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="pb-8">
      {/* title */}

      <h1 className="text-6xl py-16 text-center font-semibold">#Foryou</h1>

      {/* This div will hold all product cards */}

      <div className="px-4 flex flex-wrap justify-between gap-y-5 mb-12">
        {displayedProducts.map((product) => {
          return (
            // This link element represent a single product
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          );
        })}
      </div>

      {displayedProducts.length === allProducts.length &&
      allProducts.length > 0 ? (
        <p className="text-center text-xl">
          Looks Like you have reached the end!
        </p>
      ) : currentBatch === 0 ? (
        ""
      ) : (
        <button
          className="border-2 border-gray-700 text-gray-700 font-semibold py-2 px-20 text-2xl mx-auto block rounded-sm"
          onClick={displayMoreProducts}
        >
          LOAD MORE
        </button>
      )}
    </section>
  );
}

export default Feed;
