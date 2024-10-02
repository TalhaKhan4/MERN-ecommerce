import img1 from "../../assets/images/men-img.webp";
import img2 from "../../assets/images/women-img.webp";
import img3 from "../../assets/images/kids-img.jpg";
import img4 from "../../assets/images/shorts-img.jpg";
import img5 from "../../assets/images/sports-wear-img.jpg";

import { GrNext, GrPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";

function Slider() {
  const [currentImgIndex, updateCurrentImgIndex] = useState(0);
  const sliderImgs = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCurrentImgIndex(
        currentImgIndex + 1 === sliderImgs.length ? 0 : currentImgIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImgIndex]);

  return (
    <div className="flex flex-row flex-nowrap w-[80%] aspect-[16/7] m-auto mt-8 relative overflow-hidden shadow-2xl rounded-md">
      <div
        className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center relative transition-transform duration-300"
        style={{
          backgroundImage: `url(${img1})`,
          transform: `translateX(${-100 * currentImgIndex}%)`,
        }}
      ></div>

      <div
        className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${img2})`,
          transform: `translateX(${-100 * currentImgIndex}%)`,
        }}
      ></div>

      <div
        className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${img3})`,
          transform: `translateX(${-100 * currentImgIndex}%)`,
        }}
      ></div>

      <div
        className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${img4})`,
          transform: `translateX(${-100 * currentImgIndex}%)`,
        }}
      ></div>

      <div
        className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${img5})`,
          transform: `translateX(${-100 * currentImgIndex}%)`,
        }}
      ></div>

      <GrPrevious
        className="absolute top-[50%] translate-y-[-50%] left-0 text-5xl cursor-pointer transition-transform duration-300 text-gray-500"
        onClick={() => {
          updateCurrentImgIndex(
            currentImgIndex - 1 === -1
              ? sliderImgs.length - 1
              : currentImgIndex - 1
          );
        }}
      />

      <GrNext
        className="absolute top-[50%] translate-y-[-50%] right-0 text-5xl cursor-pointer transition-transform duration-300 text-gray-500"
        onClick={() => {
          updateCurrentImgIndex(
            currentImgIndex + 1 === sliderImgs.length ? 0 : currentImgIndex + 1
          );
        }}
      />
    </div>
  );
}

export default Slider;
