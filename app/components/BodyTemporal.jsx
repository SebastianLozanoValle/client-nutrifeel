"use client";
import { useEffect, useState, useRef } from 'react';
import {  motion } from 'framer-motion';
import { GenereicNosotros } from "@/app/components/GenereicNosotros";
import { SubTitle } from "@/app/components/SubTitle";
import { IoIosMail } from "react-icons/io";

export const BodyTemporal = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth/4));
    }, []);

    return (
        <div className='mb-[20vh] overflow-x-hidden' id='Nosotros'>
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


            <div className='my-20 bg-gray-200 shadow-2xl'>
                <div className='py-20 px-4 md:px-40 flex flex-wrap justify-around'>
                    <div className='text-center w-full flex flex-col gap-20 md:w-1/2 p-8'>
                        <SubTitle>
                            Tu plan personalizado te espera
                        </SubTitle>
                        <p className='md:px-16 font-extralight'>
                            Dejanos Tu Informacion para mantenerte al dia con las ultimas novedades de NutriFeel
                        </p>
                        <div className='flex flex-col px-4 md:px-16 py-10 rounded-xl bg-white mx-auto'>
                            <IoIosMail className='mx-auto' size={100} color='#3ac968'/>
                            <form action="">
                                <div className='relative'>
                                    <label htmlFor="correo" className='absolute top-1 ml-4 bg-white'>Email</label>
                                    <input id='correo' className='mx-auto my-4 w-full rounded-xl p-4' type='email'
                                           placeholder='Correo Electronico'/>
                                </div>
                                <div className='text-xs my-5'>
                                    <input type="checkbox"/> Acepto <a
                                    className='underline text-[#3ac968]' href="/politica">Politica de Protección de
                                    Datos</a> y <a className='underline text-[#3ac968]'
                                                   href="/terminos">Terminos y Condiciones</a>
                                </div>

                                <button className='w-full bg-[#3ac968] py-2 rounded-full text-white' type="submit">Continuar</button>
                            </form>
                        </div>
                    </div>
                    <div className='text-center w-full flex flex-col gap-20 md:w-1/2 p-8'>
                        <SubTitle>¿Como Empezar con mi plan personalizado?</SubTitle>
                        <div className='flex flex-wrap md:justify-between gap-8 md:gap-0'>
                            <div className='flex flex-col gap-6 mx-auto'>
                                <p className='font-bold text-[#e97613] text-5xl'>1</p>
                                <p className='font-semibold'>Registro de Acceso</p>
                                <p className='h-[200px] w-full bg-green-600 rounded-3xl'>img ref</p>
                            </div>
                            <div className='flex flex-col gap-6 mx-auto'>
                                <p className='font-bold text-[#e97613] text-5xl'>2</p>
                                <p className='font-semibold'>Encuesta Nutricional</p>
                                <p className='h-[200px] w-full bg-green-600 rounded-3xl'>img ref</p>
                            </div>
                            <div className='flex flex-col gap-6 mx-auto'>
                                <p className='font-bold text-[#e97613] text-5xl'>3</p>
                                <p className='font-semibold'>Compra tu plan ideal</p>
                                <p className='h-[200px] w-full bg-green-600 rounded-3xl'>img ref</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-8'>
                            <a className='px-8 py-2 rounded-3xl text-white bg-[#3ac968] shadow-2xl' href="#tarifas">Mas
                                información</a>
                            <a className='px-8 py-2 rounded-3xl text-white bg-[#e97613] shadow-2xl' href='/login'>Empezar ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};