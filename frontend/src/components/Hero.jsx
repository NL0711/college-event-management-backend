// import { useState } from "react";

// const images = [
//   { src: "http://www.frcrce.ac.in/images/2024/quilbot.png", alt: "Quilbot" },
//   { src: "http://www.frcrce.ac.in/images/speaker_nomination.png", alt: "Speaker Nominee" },
//   { src: "http://www.frcrce.ac.in/images/Startup_clinic.jpeg", alt: "Startup Clinic" }
//   // Add more images here as needed
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative bg-indigo-950 h-[32rem]">
//       {/* Static Background Image */}
//       <img
//         className="blur-[2px] w-full h-[32rem] object-cover opacity-75"
//         src="/images/carosel-bg.jpg"
//         alt="Background"
//       />

//       {/* Carousel for Foreground Image */}
//       <div className="absolute w-[42rem] rounded-sm top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/7 scale-150 shadow-sm shadow-zinc-200">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             className={`absolute w-full transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//             src={image.src}
//             alt={image.alt}
//           />
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute inset-0 top-1/2 flex items-center justify-between">
//         <button
//           onClick={prevSlide}
//           className="bg-black bg-opacity-50 text-white p-4 rounded-r-lg"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-black bg-opacity-50 text-white p-4 rounded-l-lg"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute -bottom-[2rem] left-0 right-0 flex justify-center gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentIndex ? "bg-indigo-950 scale-125" : "bg-zinc-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const Hero = () => { 
  return ( 
  <div className="relative bg-indigo-950">
  
  <img className="blur-[2px] w-full h-[32rem] object-cover opacity-75" src="/images/carosel-bg.jpg" />
  
  <img className="absolute w-[42rem] rounded-sm top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/7 scale-150 shadow-sm shadow-zinc-200" src="http://www.frcrce.ac.in/images/Startup_clinic.jpeg" />
  
  </div> 
  ); }

export default Hero;

