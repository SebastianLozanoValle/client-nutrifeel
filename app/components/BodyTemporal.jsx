"use client";
import { useEffect, useState, useRef } from 'react';
import {  motion } from 'framer-motion';
import { GenereicNosotros } from "@/app/components/GenereicNosotros";
import { SubTitle } from "@/app/components/SubTitle";

export const BodyTemporal = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth/4));
    }, []);

    return (
        <div className='pb-[20vh] overflow-x-hidden' id='Nosotros'>
            <div className='justify-center text-center'>
                <SubTitle>Nutrifeel</SubTitle>
                <p className='font-thin'>Nutrición Online Al Alcance De Todos</p>
            </div>
            <motion.div ref={carousel} className='overflow-x-hidden flex gap-4 w-screen py-20' style={{ minWidth: 'max-content' }}>
                <motion.div drag='x' dragConstraints={{right: 40, left: -width}} className='flex gap-4'>
                    <GenereicNosotros title='primero'>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida a través de
                        la nutrición.
                    </GenereicNosotros>
                    <GenereicNosotros title='segundo'>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida a través de
                        la nutrición.
                    </GenereicNosotros>
                    <GenereicNosotros title='tercero'>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida a través de
                        la nutrición.
                    </GenereicNosotros>
                    <GenereicNosotros title='cuarto'>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida a través de
                        la nutrición.
                    </GenereicNosotros>
                </motion.div>
            </motion.div>
        </div>
    );
};