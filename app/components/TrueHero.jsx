"use client";
import { SubTitle } from '@/app/components/SubTitle';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { buttonVariants, heroAnimation, logoVariants } from '@/app/animations/animations';


export const TrueHero = () => {
    return (
        <motion.div
            variants={heroAnimation}
            initial="hidden"
            animate="visible"
            className='pt-[64px] sm:h-screen w-screen relative flex mb-20'>
            <div className='p-2 w-full sm:w-3/4 backdrop-filter backdrop-blur-md bg-white bg-opacity-20 m-auto rounded-3xl flex flex-wrap'>
                <div className='w-full sm:w-1/2 my-auto p-4 h-full flex flex-col gap-4 text-center'>
                    <SubTitle>Optimiza tu nutrición</SubTitle>
                    <p className='p-4 text-2xl'>
                        Con NutriFeel y nuestros especialistas en nutrición, descubre cómo mejorar tu dieta para potenciar tu salud y bienestar.
                    </p>
                    <div className='p-4 w-full flex justify-center'>
                        <motion.a
                            href="#"
                            className="shadow-lg border border-[#3ac968] text-[#3ac968] rounded-md mx-4 px-4 py-1 my-auto hover:text-white hover:bg-primario transition-all hover:-translate-x-1"
                            whileHover="hover"
                            variants={buttonVariants}
                        >
                            Iniciar Sesión
                        </motion.a>
                        <motion.a
                            href="#"
                            className="shadow-lg border border-[#3ac968] bg-[#3ac968] text-white rounded-md mx-4 px-4 py-1 my-auto hover:text-primario hover:bg-inherit transition-all hover:-translate-x-1"
                            whileHover="hover"
                            variants={buttonVariants}
                        >
                            Registrarse
                        </motion.a>
                    </div>
                    <div className='flex gap-4 p-4 justify-center'>
                        <motion.div whileHover="hover" variants={logoVariants}>
                            <a href="#"><FaFacebook size='50' color="#e97613"/></a>
                        </motion.div>
                        <motion.div whileHover="hover" variants={logoVariants}>
                            <a href="#"><FaInstagram size='50' color="#e97613"/></a>
                        </motion.div>
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
    )
}