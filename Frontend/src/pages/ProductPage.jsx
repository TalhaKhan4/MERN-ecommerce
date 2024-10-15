import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  console.log("stated updated");
  async function fetchProduct() {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "GET",
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data);
      }
      if (res.ok) {
        setProduct(data);
        console.log(data);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [productId]);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Images */}
        <div className="w-full md:w-1/2">
          <div className="border border-gray-100 overflow-hidden">
            <img
              src={currentImg ? currentImg : product && product.thumbnail}
              alt={product && product.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex  md:flex-row mt-4 gap-2 items-center justify-center  ">
            {product &&
              product.images.map((img, i) => (
                <img
                  onClick={() => setCurrentImg(img)}
                  key={i}
                  src={img}
                  alt={`Product thumbnail ${i}`}
                  className="w-20 h-20 md:w-32 md:h-32 object-cover border border-gray-300 rounded-lg cursor-pointer hover:shadow-md"
                />
              ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product && product.title}</h1>
          <p className="text-gray-500 mt-2">
            Brand: {product && product.brand}
          </p>

          {/* Price and Discount */}
          <div className="flex items-center mt-4 space-x-4">
            <span className="text-2xl font-semibold text-blue-600">
              ${product && product.price.toFixed(2)}
            </span>
            {product && product.discountPercentage > 0 && (
              <span className="text-sm text-green-600">
                -{product && product.discountPercentage}% off
              </span>
            )}
          </div>

          {/* Availability */}
          <p
            className={`mt-2 font-medium ${
              product && product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product && product.stock > 0
              ? `In Stock (${product && product.stock} available)`
              : "Out of Stock"}
          </p>

          {/* Rating */}
          <p className="mt-2 text-gray-600">
            Rating: {product && product.rating} / 5
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-700">{product && product.description}</p>

          {/* Add to Bag and Wishlist */}
          <div className="flex items-center mt-6 space-x-4">
            <button
              className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => console.log("Add to Bag")}
            >
              <FaShoppingBag className="mr-2" />
              Add to Bag
            </button>
            <button
              className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
              onClick={() => console.log("Added to Wishlist")}
            >
              <FaHeart className="w-6 h-6" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 space-y-2">
            <p className="text-sm text-gray-500">
              <strong>SKU:</strong> {product && product.sku}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Dimensions:</strong> {product && product.dimensions.width}{" "}
              x {product && product.dimensions.height} x{" "}
              {product && product.dimensions.depth} cm
            </p>
            <p className="text-sm text-gray-500">
              <strong>Weight:</strong> {product && product.weight} kg
            </p>
            <p className="text-sm text-gray-500">
              <strong>Warranty:</strong>{" "}
              {product && product.warrantyInformation}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Return Policy:</strong> {product && product.returnPolicy}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Shipping:</strong>{" "}
              {product && product.shippingInformation}
            </p>
          </div>
        </div>
      </div>

      {/* Product Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <div className="mt-4 space-y-4">
          {product &&
            product.reviews.map((review, idx) => (
              <div key={idx} className="border-t border-gray-200 pt-4">
                <p className="text-gray-700">{review.comment}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>by {review.reviewerName}</span>
                  <span>Rating: {review.rating} / 5</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
