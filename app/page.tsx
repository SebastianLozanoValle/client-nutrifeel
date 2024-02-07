
import Navbar from './components/NavBar';
import Hero from "@/app/components/Hero";
import React from "react";
import {Footer} from "@/app/components/Footer";
import {PricingPlans} from "@/app/components/PricingPlans";
import {Imc} from "@/app/components/Imc";
import { Nosotros } from './components/Nosotros';
import { MonitoreaTuProgreso } from './components/MonitoreaTuProgreso';
import { PlanPersonalizado } from './components/PlanPersonalizado';
import { Servicios } from './components/Servicios';

export default function Home() {
  return (
      <main className="">
          <Navbar/>
          <Hero/>
          <MonitoreaTuProgreso />
          <Imc />
          <div className='text-white' id='Nosotros'>
            .
          </div>
          <Nosotros />
          <PlanPersonalizado />
          <Servicios />
          <PricingPlans />
          <Footer/>
      </main>
  );
}
