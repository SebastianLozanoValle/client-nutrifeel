"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { GenereicNosotros } from "@/app/components/GenereicNosotros";
import { SubTitle } from "@/app/components/SubTitle";
import { IoIosMail } from "react-icons/io";
import { Titulo } from "@/app/components/Titulo";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import { buttonVariants } from "@/app/animations/animations";
import { PiScrollFill } from "react-icons/pi";
import { IoTelescope } from "react-icons/io5";

export const BodyTemporal = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth / 3.2));
    }, []);

    return (
        <div className='my-[20vh] overflow-x-hidden' id='Nosotros'>
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
                    <GenereicNosotros title='tercero' icono={<PiScrollFill size={75} color='#e97613' />}>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida
                        a través de
                        la nutrición.
                    </GenereicNosotros>
                    <GenereicNosotros title='cuarto' icono={<PiScrollFill size={75} color='#e97613' />}>
                        NutriFeel es una plataforma que busca ayudar a las personas a mejorar su salud y calidad de vida
                        a través de
                        la nutrición.
                    </GenereicNosotros>
                </motion.div>
            </motion.div>


            <div className='my-20 bg-gray-700 shadow-2xl text-white'>
                <div className='py-20 px-4 md:px-40 flex flex-wrap justify-around'>
                    <div className='text-center w-full flex flex-col gap-20 md:w-1/2 p-8'>
                        <Titulo>
                            Tu plan personalizado te espera
                        </Titulo>
                        <p className='md:px-16 font-extralight'>
                            Dejanos Tu Informacion para mantenerte al dia con las ultimas novedades de NutriFeel
                        </p>
                        <div className='flex flex-col px-4 md:px-16 py-10 rounded-xl bg-white mx-auto text-black'>
                            <IoIosMail className='mx-auto' size={100} color='#3ac968' />
                            <form action="">
                                <div className='relative'>
                                    <label htmlFor="correo" className='absolute top-1 ml-4 bg-white'>Email</label>
                                    <input id='correo' className='mx-auto my-4 w-full rounded-xl p-4' type='email'
                                        placeholder='Correo Electronico' />
                                </div>
                                <div className='text-xs my-5'>
                                    <input type="checkbox" /> Acepto <a
                                        className='underline text-[#3ac968]' href="/politica">Politica de Protección de
                                        Datos</a> y <a className='underline text-[#3ac968]'
                                            href="/terminos">Terminos y Condiciones</a>
                                </div>

                                <button className='border border-primario w-full bg-[#3ac968] py-2 rounded-full text-white hover:bg-inherit hover:text-primario transition-all hover:-translate-x-1 hover:translate-y-1 hover:shadow-3xl'
                                    type="submit">Continuar
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='text-center w-full flex flex-col gap-20 md:w-1/2 p-8'>
                        <Titulo>¿Como Empezar con mi plan personalizado?</Titulo>
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
                            <motion.a
                                href="#"
                                className="px-8 py-2 rounded-3xl text-white bg-primario shadow-3xl border border-primario hover:bg-inherit"
                                whileHover="hover"
                                variants={buttonVariants}
                            >
                                Mas información
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-8 py-2 rounded-3xl text-white bg-secundario shadow-3xl border border-secundario hover:bg-inherit"
                                whileHover="hover"
                                variants={buttonVariants}
                            >
                                Empezar ahora
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap py-4'>
                <div className='w-full lg:w-1/2 py-4 lg:py-24 px-4 lg:pl-24 flex flex-col gap-4'>
                    <span className='text-[#e97613]'>Nuestros servicios</span>
                    <SubTitle>Lorem Ipsum Dolor</SubTitle>
                    <p className='text-balance leading-7 md:leading-10'>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit mor ametion consectetur elit. Vesti at bulum
                        nec odio aea the dumm ipsumm ipsum that dolocons is rsus mal suada and fadolorit to the
                        consectetur elit. All the Lorem Ipsum at generators on the Internet tend to repeat predefined
                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
                        of the over 200 Latin words, combined with a handful of model sentence more as structures, to
                        generate Lorem Ipsum which looks reasonable.
                    </p>
                    <div>
                        <button
                            className='rounded border-2 border-[#e97613] text-[#e97613] py-2 px-4 flex items-center gap-4 font-semibold hover:-translate-y-1 hover:translate-x-1 hover:scale-110 transition-all'>
                            Conoce más<FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 pr-20 flex flex-col gap-4'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image src='/frutas.png' alt={'conjunto de frutas'} fill />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap py-4'>
                <div className='w-full lg:w-1/2 pl-20 flex flex-col gap-4'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image src='/mas_frutas.png' alt={'conjunto de frutas'} fill />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 py-4 lg:py-24 px-4 lg:pr-24 flex flex-col gap-4'>
                    <span className='text-[#e97613]'>Nuestros servicios</span>
                    <SubTitle>Lorem Ipsum Dolor</SubTitle>
                    <p className='text-balance leading-7 md:leading-10'>
                        Grursus mal suada faci lisis Lorem ipsum dolarorit mor ametion consectetur elit. Vesti at bulum
                        nec odio aea the dumm ipsumm ipsum that dolocons is rsus mal suada and fadolorit to the
                        consectetur elit.
                    </p>
                    <ul className='list-disc ml-8'>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};