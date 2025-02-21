'use client';
import { Hero } from "../../_components/Hero";
import { OurStory } from "../../_components/OurStory";
import { Catalog } from "../../_components/Catalog";
import { Discount } from "../../_components/Discount";
import { Nutrition } from "../../_components/Nutrition";
import { Customer } from "../../_components/Customer";
import Confetti from 'react-confetti';
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth - 50);
    setHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
        />
      <Hero/>
      {/* <BannerBottom/> */}
      <OurStory/>
      <Catalog/>
      <Discount/>
      <Nutrition/>
      <Customer/>
    </>
  );
}