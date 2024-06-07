import React, {useEffect, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from "./assets/img1.jpg";
import img0 from "./assets/img0.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";

//store all the image for the slider as an array
const sliderImage = [img1, img0, img2, img3, img4, img5, img6];

let count = 0;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    infiniteSlider();
  }, []);

  const infiniteSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 3000);
  }

  const handleOnNextClick = () => {
    count = (count + 1) % sliderImage.length;
    setCurrentIndex(count); 
  }

  const handleOnPreviousClick = () => {
    const imgLength = sliderImage.length;
    count = (currentIndex + imgLength - 1) % imgLength;
    setCurrentIndex(count);
  }
  return (
    <div className="slider w-full relative h-[17rem] -z-1">
      <img
        src={sliderImage[currentIndex]}
        alt="Slider-image"
        className="home-image w-full"
      />
       <div className="arrows absolute w-full h-10 flex justify-between items-center top-10 sm:top-16 lg:top-28 px-5">
            <button onClick={handleOnPreviousClick}><ArrowBackIosIcon sx={{ fontSize: 38 }} className="text-neutral-300"/></button>
            <button onClick={handleOnNextClick}><ArrowForwardIosIcon sx={{ fontSize: 38 }} className="text-neutral-200"/></button>
        </div>
    </div>
  );
};

export default Slider;
