
import Navbar from './components/NavBar';
import Hero from "@/app/components/Hero";
import React from "react";
import {BodyTemporal} from "@/app/components/BodyTemporal";

export default function Home() {
  return (
      <main className="">
          <Navbar/>
          <Hero/>
          <BodyTemporal/>
      </main>
      
  );
}
