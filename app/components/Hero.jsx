"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {TbTriangleFilled} from "react-icons/tb";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {SubTitle} from "@/app/components/SubTitle";

// Define las variantes de animación
const bounceAnimation = {
    hidden: { x: "40vw" }, // Inicia más arriba fuera de la pantalla
    visible: {
        y: ["calc(-101vh - 1600px)", "calc(95vh - 1600px)", "calc(90vh - 1600px)"], // Baja al 50vh, sube un 5vh y luego baja un 5vh
        transition: {
            duration: 4, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};
const bounceAnimation2 = {
    hidden: { x: "50vw" }, // Inicia más arriba fuera de la pantalla
    visible: {
        y: ["calc(-101vh - 2800px)", "calc(85vh - 2800px)", "calc(80vh - 2800px)"], // Baja al 50vh, sube un 5vh y luego baja un 5vh
        transition: {
            duration: 5, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};

const heroAnimation = {
    hidden: { opacity: 0, y: -100 }, // Inicia más arriba fuera de la pantalla
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, // Duración de la animación
            ease: "easeInOut", // Efecto de rebote
        }
    }
};


export default function Hero() {
    return (
        <>
            <div className='h-auto overflow-x-hidden -z-10'
                 style={{position: 'absolute', width: '100%', height: '100%'}}> {/* Contenedor con posición absoluta */}
                {/* Triángulo equilátero 1 con esquinas redondeadas */}
                <motion.div
                    variants={bounceAnimation}
                    initial="hidden"
                    animate="visible"
                    style={{zIndex: -1}} // Establece un z-index bajo para que se muestre detrás del contenido
                >
                    <TbTriangleFilled color="#e97613" size="1500"/>
                </motion.div>

                {/* Triángulo equilátero 2 con esquinas redondeadas */}
                <motion.div
                    variants={bounceAnimation2}
                    initial="hidden"
                    animate="visible"
                    style={{
                        position: 'absolute',
                        x: '100px',
                        y: '-400px',
                        zIndex: 0
                    }} // Desplazado a la derecha y establece un z-index bajo para que se muestre detrás del contenido
                >
                    <TbTriangleFilled color="#3ac968" size="1500"/>
                </motion.div>
            </div>
            <motion.div
                variants={heroAnimation}
                initial="hidden"
                animate="visible"
                className='pt-[64px] sm:h-screen w-screen relative flex mb-20'>
                <div className='p-2 w-full sm:w-3/4 backdrop-filter backdrop-blur-md bg-white bg-opacity-20 m-auto rounded-3xl flex flex-wrap'>
                    <div className='w-full sm:w-1/2 my-auto p-4 h-full flex flex-col gap-4 text-center'>
                        <SubTitle>Lorem ipsum dolor</SubTitle>
                        <p className='p-4 text-2xl'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet
                        </p>
                        <div className='p-4 w-full flex justify-center'>
                            <a href="#"
                               className="shadow-lg border border-[#3ac968] text-[#3ac968] rounded-md mx-4 px-4 py-1 my-auto">Iniciar
                                Sesión</a>
                            <a href="#"
                               className="shadow-lg bg-[#3ac968] text-white rounded-md mx-4 px-4 py-1 my-auto">Registrarse</a>
                        </div>
                        <div className='flex gap-4 p-4 justify-center'>
                            <a href="#"><FaFacebook size='50' color="#e97613"/></a>
                            <a href="#"><FaInstagram size='50' color="#e97613"/></a>
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 h-[400px] md:h-[600px] my-auto flex p-4'>
                        <iframe
                            className='rounded-xl shadow-xl my-auto p-4'
                            width="100%" height="75%"
                            src="https://www.youtube.com/embed/E8y3eDUMb4Q?si=hHMchDDrgij22FmS"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </motion.div>
        </>
    );
}