import {PiScrollFill} from "react-icons/pi";
import {Titulo} from "./Titulo";
import {motion} from "framer-motion";

export const GenereicNosotros = ({ title, children }) => {
    return (
        <motion.div
            className='text-center flex flex-col items-center mx-auto w-[85vw] sm:w-[600px] sm:h-[325px] p-10 bg-gray-50 rounded-3xl shadow-2xl'>
            <PiScrollFill size={75} color="#e97613"/>
            <Titulo>{title}</Titulo>
            <p className=' font-semibold'>
                {children}
            </p>
        </motion.div>
    )
}