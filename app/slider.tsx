"use client";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "image1.jpg" },
  { url: "notes.jpg" },
  { url: "message.jpeg" },
];

const slider = () => {
  return (
    <div className="justify-items-center pt-5 ">
      <SimpleImageSlider
        width={700}
        height={500}
        images={images}
        autoPlay={true}
        showNavs={false}
        showBullets={false}
      />
    </div>
  );
};
export default slider;
