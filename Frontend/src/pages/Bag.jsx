import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateCartItemQuantity } from "../store";
function Bag() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleQuantityChange = (e, productId) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateCartItemQuantity({ productId, newQuantity })); // Dispatch with an object
  };
  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-4">
            {cartItems.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">{product.title}</h2>
                    <p className="text-gray-500">Price: ${product.price}</p>
                    <div className="flex items-center">
                      <label className="mr-2">Quantity:</label>
                      <input
                        min={1}
                        max={10}
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(e, product.id)}
                        className="w-16 p-1 border rounded-md text-center"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(product)}
                      className="mt-2 text-red-500 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">
                    Total: ${product.price * product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 text-right">
            <p className="text-lg font-semibold">
              Total Quantity: {totalQuantity}
            </p>
            <p className="text-xl font-bold">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Link
              to="/checkout"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Checkout
            </Link>
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => alert("Continue Shopping")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bag;
