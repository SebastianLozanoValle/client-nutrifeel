
import Navbar from './components/NavBar';
import Hero from "@/app/components/Hero";
import React from "react";
import {BodyTemporal} from "@/app/components/BodyTemporal";
import {Footer} from "@/app/components/Footer";
import {PricingPlans} from "@/app/components/PricingPlans";

export default function Home() {
  return (
      <main className="">
          <Navbar/>
          <Hero/>
          <BodyTemporal/>
          <PricingPlans />
          <Footer/>
      </main>
  );
}
