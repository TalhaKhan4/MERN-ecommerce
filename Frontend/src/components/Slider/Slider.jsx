import img1 from "../../assets/images/men-img.webp";
import img2 from "../../assets/images/women-img.webp";
import img3 from "../../assets/images/kids-img.jpg";
import img4 from "../../assets/images/shorts-img.jpg";
import img5 from "../../assets/images/sports-wear-img.jpg";
import img6 from "../../assets/images/sale-img.webp";

import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

function Slider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const sliderImgs = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex(
        currentImgIndex + 1 === sliderImgs.length ? 0 : currentImgIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImgIndex]);

  return (
    <div className="flex flex-row flex-nowrap w-[80%] aspect-[16/7] m-auto mt-8 relative overflow-hidden shadow-2xl rounded-md">
      {sliderImgs.map((img, i) => {
        return (
          <div
            key={i}
            className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center relative transition-transform duration-300"
            style={{
              backgroundImage: `url(${img})`,
              transform: `translateX(${-100 * currentImgIndex}%)`,
            }}
          ></div>
        );
      })}
      <GrPrevious
        className="absolute top-[50%] translate-y-[-50%] left-0 text-5xl cursor-pointer transition-transform duration-300 text-gray-500"
        onClick={() => {
          setCurrentImgIndex(
            currentImgIndex - 1 === -1
              ? sliderImgs.length - 1
              : currentImgIndex - 1
          );
        }}
      />
      <GrNext
        className="absolute top-[50%] translate-y-[-50%] right-0 text-5xl cursor-pointer transition-transform duration-300 text-gray-500"
        onClick={() => {
          setCurrentImgIndex(
            currentImgIndex + 1 === sliderImgs.length ? 0 : currentImgIndex + 1
          );
        }}
      />

      <div className="flex gap-4 absolute bottom-[5%] left-[50%] translate-x-[-50%]">
        {sliderImgs.map((_, i) => (
          <FaCircle
            key={i}
            className={`cursor-pointer ${
              i === currentImgIndex ? "text-rose-50" : "text-gray-400"
            }`}
            onClick={() => setCurrentImgIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
