import { Hero } from "./_components/Hero";
import { OurStory } from "./_components/OurStory";
import { Catalog } from "./_components/Catalog";
import { Discount } from "./_components/Discount";
import { Nutrition } from "./_components/Nutrition";
import { Customer } from "./_components/Customer";
import { BannerBottom } from "./_icons/BannerBottom";

export default function Home() {
  return (
    <>
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
