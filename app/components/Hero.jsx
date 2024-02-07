"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TbTriangleFilled} from "react-icons/tb";
import { TrueHero } from "@/app/components/TrueHero"; // Importa el componente TrueHero
import {
    bounceAnimation,
    bounceAnimation2,
} from "@/app/animations/animations";




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
            <TrueHero />
        </>
    );
}