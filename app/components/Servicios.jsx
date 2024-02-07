import Image from 'next/image'
import { SubTitle } from './SubTitle'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const Servicios = () => {
    return (
        <div className="px-8 sm:px-0">
            <div className='text-white' id='Servicios'>
                .
            </div>
            <div className='flex flex-wrap py-4'>
                <div className='w-full lg:w-1/2 py-4 lg:py-24 px-4 lg:pl-24 flex flex-col gap-4'>
                    <span className='text-[#e97613]'>Nuestros servicios</span>
                    <SubTitle>Mejora tus hábitos y salud alimenticia con nosotros</SubTitle>
                    <p className='text-balance leading-7 md:leading-10'>
                        En un mundo donde el bienestar y la salud son prioridades fundamentales, nuestro servicio se destaca como tu aliado definitivo para alcanzar un estilo de vida más equilibrado. Diseñada meticulosamente para satisfacer tus necesidades individuales, proporcionamos herramientas poderosas que te ayudarán a cultivar hábitos saludables y mejorar tu nutrición.
                    </p>
                    <div>
                        <button
                            className='rounded border-2 border-[#e97613] text-[#e97613] py-2 px-4 flex items-center gap-4 font-semibold hover:translate-y-1 hover:-translate-x-1 hover:scale-90 transition-all hover:shadow-2xl'>
                            Conoce más<FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 pr-20 flex flex-col gap-4'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image src='/dieta.jpg' alt={'conjunto de frutas'} fill />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap py-4'>
                <div className='w-full lg:w-1/2 pl-20 flex flex-col gap-4'>
                    <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                        <Image src='/doctores.jpg' alt={'conjunto de frutas'} fill />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 py-4 lg:py-24 px-4 lg:pr-24 flex flex-col gap-4'>
                    <span className='text-[#e97613]'>Nuestros servicios</span>
                    <SubTitle>Expertos a tu alcance: Apoyo personalizado en cada paso</SubTitle>
                    <p className='text-balance leading-7 md:leading-10'>
                        En nuestra plataforma, no solo te proporcionamos herramientas para mejorar tus hábitos y salud alimenticia, sino que también te conectamos directamente con un equipo de especialistas dedicados a ayudarte en tu viaje hacia el bienestar. Con la facilidad de un clic, puedes acceder a asesoramiento experto, orientación personalizada y apoyo continuo de profesionales altamente calificados.
                    </p>
                    <ul className='list-disc ml-8'>
                        <li>Nutricionistas certificados</li>
                        <li>Entrenadores personales</li>
                        <li>Psicólogos especializados en comportamiento alimenticio</li>
                        <li>Estrategias generadas con inteligencia artificial</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}