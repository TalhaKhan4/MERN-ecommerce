import { useEffect, useState } from "react";

// importing all the images of the slider
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import img6 from "../../assets/images/img-6.jpg";

// importing icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

function Slider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const sliderImgs = [img1, img2, img3, img4, img5, img6];

  // This code makes the slider auto-scroll every 10 seconds.
  // By passing currentImgIndex in the dependency array, the useEffect hook re-runs every time currentImgIndex changes (either due to the setTimeout after 10s or when the user clicks the previous/next buttons). This ensures that the setTimeout resets and runs again after each image change.

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentImgIndex((prevImgIndex) => {
        return prevImgIndex + 1 === sliderImgs.length ? 0 : prevImgIndex + 1;
      });
    }, 10000);

    return () => clearTimeout(intervalId);
  }, [currentImgIndex]);

  return (
    /* The below div renders each image in the slider */
    /* Images are styled as background images and positioned side by side horizontally. */
    /* The transform property is used to shift the visible image by updating the translateX value, creating the sliding effect. */
    /* The transition-transform property ensures the sliding animation happens smoothly over 300ms. */

    <div className="flex flex-row flex-nowrap w-[100%] aspect-[8/7] md:aspect-[16/7] mt-4 md:mt-0 relative overflow-hidden shadow-2xl">
      {sliderImgs.map((img, i) => {
        return (
          <div
            className="w-[100%] h-[100%] flex-shrink-0 bg-cover bg-center transition-transform duration-300"
            key={i}
            style={{
              backgroundImage: `url(${img})`,
              transform: `translateX(${-100 * currentImgIndex}%)`, // Move to the correct image based on currentImgIndex
            }}
          ></div>
        );
      })}

      {/* Previous button to navigate to the previous image */}
      {/* It updates the currentImgIndex by decreasing it. If the current image is the first one, it loops back to the last image. */}

      <GrFormPrevious
        className="absolute top-[50%] translate-y-[-50%] left-[2%] md:left-[1%] text-3xl md:text-4xl cursor-pointer transition-transform duration-300 text-black bg-white rounded-full"
        onClick={() => {
          setCurrentImgIndex(
            currentImgIndex - 1 === -1
              ? sliderImgs.length - 1
              : currentImgIndex - 1 // Loop back to the last image if at the first one
          );
        }}
      />

      {/* Next button to navigate to the next image */}
      {/* It increments the currentImgIndex. If the current image is the last one, it loops back to the first image. */}

      <GrFormNext
        className="absolute top-[50%] translate-y-[-50%] right-[2%] md:right-[1%] text-3xl md:text-4xl cursor-pointer transition-transform duration-300 text-black bg-white rounded-full"
        onClick={() => {
          setCurrentImgIndex(
            currentImgIndex + 1 === sliderImgs.length ? 0 : currentImgIndex + 1 // Loop back to the first image if at the last one
          );
        }}
      />

      {/* This div contains the navigation dots, which indicate the current image in the slider. */}
      {/* The number of dots corresponds to the number of images. */}
      {/* The currently active image is highlighted by changing the color of the corresponding dot. */}

      <div className="flex gap-2 absolute bottom-[5%] left-[50%] translate-x-[-50%]">
        {sliderImgs.map((_, i) => (
          <FaCircle
            key={i}
            className={`cursor-pointer text-xs md:text-sm ${
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
