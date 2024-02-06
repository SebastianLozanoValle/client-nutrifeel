
import Navbar from './components/NavBar';
import Hero from "@/app/components/Hero";
import React from "react";
import {BodyTemporal} from "@/app/components/BodyTemporal";
import {Footer} from "@/app/components/Footer";
import {PricingPlans} from "@/app/components/PricingPlans";
import {Imc} from "@/app/components/Imc";
import { SubTitle } from './components/SubTitle';
import { Titulo } from './components/Titulo';

export default function Home() {
  return (
      <main className="">
          <Navbar/>
          <Hero/>
          <div className='flex flex-col gap-4 w-4/5 mx-auto text-center my-20'>
            <SubTitle >
              Monitorea tu progreso
            </SubTitle>
            <p>Mantente al dia con tu salud y lleva el seguimiento. sabemos lo importante que es para ti saber que puede estar afectando tu bienestar por lo cual te brindamos las herramientas para que veas de primera mano si estas en los rangos aceptables de salud.</p>
            <h3 className='text-secundario text-2xl'> Pruebalo y empieza a  medir tus resultados.</h3>
          </div>
          <Imc />
          <BodyTemporal/>
          <PricingPlans />
          <Footer/>
      </main>
  );
}
