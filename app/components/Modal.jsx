import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ closeModal }) => (
    <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        initial={{ x: '100vw' }} // Aparece desde la derecha
        animate={{ x: 0 }} // Se mueve a la posición original
        exit={{ x: '100vw' }} // Se va hacia la izquierda al cerrarse
    >
        <motion.div
            className="bg-white p-8 rounded-lg"
            initial={{ opacity: 0, y: -50 }} // Aparece con opacidad desde arriba
            animate={{ opacity: 1, y: 0 }} // Se desplaza a la posición original con opacidad completa
            exit={{ opacity: 0, y: -50 }} // Desaparece con opacidad hacia arriba
        >
            <h2 className="text-2xl font-bold mb-4">Plan Details</h2>
            {/* Aquí puedes mostrar más detalles del plan */}
            <p>Detalles del plan aquí...</p>
            <button onClick={closeModal} className="mt-4 bg-primario text-black rounded px-4 py-2">Close</button>
        </motion.div>
    </motion.div>
);

export default Modal;
