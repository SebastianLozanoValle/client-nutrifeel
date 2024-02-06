import {PiScrollFill} from "react-icons/pi";
import {Titulo} from "./Titulo";
import {motion} from "framer-motion";

export const GenereicNosotros = ({ title, children, icono }) => {
    return (
        <motion.div
            className='text-center flex flex-col items-center mx-auto w-[85vw] sm:w-[600px] p-10 bg-gray-50 rounded-3xl shadow-2xl'>
            {icono}
            <Titulo>{title}</Titulo>
            <p className=' font-semibold text-balance'>
                {children}
            </p>
        </motion.div>
    )
}