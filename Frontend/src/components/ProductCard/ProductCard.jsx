import { Link } from "react-router-dom";

function ProductCard({ image, title, price, rating }) {
  return (
    <Link className="bg-white w-[24%] rounded-md p-2 hover:shadow-xl">
      <div className="h-72">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="mt-4 h-[2.5em] overflow-hidden">{title}</h2>

        <span className="text-xl text-gray-700 font-semibold">
          Price : ${price}
        </span>

        <span>
          Rating : {rating.rate} ({rating.count})
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
