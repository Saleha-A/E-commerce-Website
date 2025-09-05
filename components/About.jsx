import React from 'react';
import bgImage from "../assets/about.jpg";

const About = () => {
  return (
   
     <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-6">
        <div className="max-w-xl text-black">
          <h3 className="text-4xl font-bold mb-4 text-teal-700">
           Welcome to KiddieCart — More than a store, it’s a joyful experience.
          </h3>
          <br/>
          <span className="text-white-600 mb-3 font-medium text-xl "> We’re a small team with a big heart, passionate about finding and sharing delightful products for kids and families. Whether you're picking up something practical or something playful, we want your experience to feel smooth, safe, and full of smiles.</span> <br/>
          <br/>
           <span className="text-white-600 mb-3 font-medium text-xl ">  KiddieCart began with a simple idea: make online shopping easy, inspiring, and family-friendly. As students and creators, we understand how important it is to trust what you buy — especially when it’s for the little ones you love.</span> <br/>
           <br/>
         <span className="text-white-600 mb-3 font-medium text-xl ">    Every item is handpicked with care, and every page is designed to be clear, colorful, and fun. We believe in honesty, accessibility, and adding a touch of magic to everyday moments.</span> <br/>
        <br/>
         
          <span className=" text-teal-600  text-2xl"><i>“KiddieCart feels like a breath of fresh air. I love how thoughtful everything is — from the design to the products.”</i></span>

        </div>
      </div>
      <div
        className="md:w-1/2 w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      > 
      </div>
    </div>
  );
};

export default About;

