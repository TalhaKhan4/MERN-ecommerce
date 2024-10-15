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

  // The below code makes the slider auto scroll

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentImgIndex((prevImgIndex) => {
        return prevImgIndex + 1 === sliderImgs.length ? 0 : prevImgIndex + 1;
      });
    }, 10000);

    return () => clearTimeout(intervalId);
  }, [currentImgIndex]);

  return (
    <div className="flex flex-row flex-nowrap w-[95%] aspect-[16/5.5]  mt-4 rounded-sm md:rounded-none m-auto md:w-[100%] md:mt-0  relative overflow-hidden">
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
      {/* previous button to go to previous img */}
      {/* <GrPrevious
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
      /> */}

      {/* The below div is a container for all the dots which shows which img is currently visible */}
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
