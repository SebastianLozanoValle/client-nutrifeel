'use client';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/app/animations/animations';
import { Titulo } from './Titulo';

export const PlanPersonalizado = () => {
    return (
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

                            <button className='border border-primario w-full bg-[#3ac968] py-2 rounded-full text-white hover:bg-inherit hover:text-primario transition-all hover:-translate-x-1 hover:translate-y-1 hover:scale-95 hover:shadow-2xl'
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
    )
}