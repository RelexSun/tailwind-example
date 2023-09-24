import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">This is my Porfolio</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Relexsun Nop
        </h1>
        <div className="flex justify-center py-4">
          <p className="md:text-5xl sm:text-4xl font-bold">SUN is</p>
          <ReactTypingEffect
            className="md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-gray-600"
            text={["Hot", "Sexy", "Cute", "Loy", "Kur oy Sl"]}
            typingSpeed={120}
            eraseSpeed={100}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          I am a Mobile developer at ANB school
        </p>
      </div>
    </div>
  );
};

export default Hero;
