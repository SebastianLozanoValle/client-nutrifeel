'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GenereicNosotros } from "@/app/components/GenereicNosotros";
import { SubTitle } from "@/app/components/SubTitle";
import { PiScrollFill } from "react-icons/pi";
import { IoTelescope } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

export const Nosotros = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth / 3.2));
    }, []);

    return (
        <div className='my-[20vh] overflow-x-hidden'>
            <div className='justify-center text-center'>
                <SubTitle><span className='text-[#e97613]'>{'<'}</span>Nutrifeel<span
                    className='text-[#e97613]'>{'/>'}</span></SubTitle>
                <p className='font-thin'>Feeling con la nutrición</p>
            </div>
            <motion.div ref={carousel} className='overflow-x-hidden flex gap-4 w-screen py-20'
                style={{ minWidth: 'max-content' }}>
                <motion.div drag='x' dragConstraints={{ right: 40, left: -width }} className='flex gap-4'>
                    <GenereicNosotros title='Misión' icono={<PiScrollFill size={75} color='#e97613' />}>
                        Nuestra misión es empoderar a las personas para que adopten un estilo de vida saludable y sostenible, al proporcionar un sistema tecnológico de fácil uso que les permita impartir hábitos saludables en sus hogares. Nos esforzamos por fusionar la tecnología con la salud, para proporcionar a nuestros usuarios acceso a conocimientos y especialistas de la salud desde la comodidad de su hogar, lo que les permitirá tomar decisiones informadas sobre su bienestar. En última instancia, nuestro objetivo es ayudar a las personas a vivir vidas más saludables y felices.
                    </GenereicNosotros>
                    <GenereicNosotros title='Visión' icono={<IoTelescope size={75} color='#e97613' />}>
                        Para el año 2028, nuestra visión es transformar la salud y el bienestar de las personas en toda América Latina a través de la tecnología. Estamos comprometidos con la creación de una comunidad conectada y global que tenga acceso a expertos en salud de clase mundial y recursos de bienestar personalizados. Nos esforzamos por brindar una plataforma tecnológica que permita a las personas mejorar su salud física y mental, aumentar su felicidad y calidad de vida, y reducir los costos de atención médica. Al aprovechar la tecnología de vanguardia y la innovación, estamos creando un futuro en el que la salud y el bienestar sean accesibles y asequibles para todos en América Latina
                    </GenereicNosotros>
                    <GenereicNosotros title='Personalización sin límites' icono={<FaEdit size={75} color='#e97613' />}>
                        ¿Qué funciona para ti? Nuestra aplicación te permite personalizar tus metas y preferencias de manera única. Ya sea que estés buscando perder peso, ganar masa muscular o simplemente mejorar tu salud general, adaptamos nuestras funciones para adaptarse a tus objetivos específicos.
                    </GenereicNosotros>
                    <GenereicNosotros title='cuarto' icono={<PiScrollFill size={75} color='#e97613' />}>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida
                        a través de
                        la nutrición.
                    </GenereicNosotros>
                </motion.div>
            </motion.div>
        </div>
    )
}