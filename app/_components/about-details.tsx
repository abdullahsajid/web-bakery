import React from 'react';
import Image from 'next/image';
import KidCheif from "../../public/assets/kid-cheif.png"

const AboutDetails = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-[#753F21] text-[18px]'>
        Welcome to 
        <span className='font-bold'> SUPER SWEET BAKERY </span> 
        where every bite is a taste of love, tradition, and quality. Founded in 
        <span className='font-bold'> 1974</span>
        , we are a family-owned bakery passionate about bringing the finest, freshest, and most flavorful baked goods to our community. Our story began with a simple belief that the best treats are made from the heart, using recipes passed down through generations and the highest quality ingredients. 
      </div>
      <div className='text-[#753F21] text-[18px]'>
        From our signature sourdough bread to our decadent cakes, every item is handcrafted by our skilled bakers, who pour creativity and care into every detail. Our team works tirelessly each day, combining traditional techniques with a modern twist to keep our menu both classic and exciting. We take pride in sourcing locally, supporting farmers and suppliers who share our commitment to sustainability and excellence.
      </div>
      <div className='flex items-center max-sm:flex-col'>
        <div className='flex flex-col gap-5'>
            <div className='text-[#753F21] text-[18px]'>
                Our bakery is led by
                <span className='font-bold'> MUHAMMAD ALI</span>, 
                a passionate baker and visionary with a deep love for all things delicious and homemade. Growing up in a family that treasured food as a way to connect and celebrate, Muhammad Ali has always felt a strong pull toward the art of baking. With years of experience, a dedication to quality, and an eye for detail, he turned a lifelong passion into this cherished neighborhood bakery.
            </div>
            <div className='text-[#753F21] text-[18px]'>
                As the head chef, Muhammad Ali brings an inspiring mix of creativity and tradition to every item on our menu. After studying at [reputable culinary school, if applicable] and perfecting his skills in both classic and modern techniques, he has become known for creating recipes that honor tradition while adding a fresh twist. From sunrise batches of artisan bread to specialty desserts made with locally sourced ingredients, Muhammad Ali brings an authentic and thoughtful touch to every bake.
            </div>
            <div className='text-[#753F21] text-[18px]'>
                Warm, approachable, and a bit of a perfectionist in the best way, Muhammad Ali loves connecting with our customers. Whether helping someone find a new favorite pastry or sharing baking tips with aspiring chefs, he is truly the soul of our bakery.
            </div>
            <div className='text-[#753F21] text-[18px]'>
                Stop by and say hello! Muhammad Ali is always ready to welcome you with a smile and a fresh-from-the-oven treat.
            </div>
        </div>
        <div className='w-full'>
            <Image src={KidCheif} alt='KidCheif'/>
        </div>
      </div>
    </div>
  )
}

export default AboutDetails
