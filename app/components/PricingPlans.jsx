'use client';
import { motion } from 'framer-motion';

// Definir las variantes de animación
const variants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgb(0,0,0,0)", transition: { duration: 0.3 } },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgb(0,0,0,0.2)", transition: { duration: 0.3 } },
};

// Componente para un plan de precios
const PricingPlan = ({ plan }) => (
    <motion.div
        className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-3xl`}
        variants={variants}
        initial="initial"
        whileHover="hover"
        transition={{ delay: 0 }}
    >
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-center items-center hover:bg-gray-700 hover:text-white transition-all">
            <h2 className="text-2xl font-bold mb-4 text-primario">{plan.name}</h2>
            <p className="text-5xl font-extrabold mb-4 text-secundario">{plan.price}</p>
            <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="mt-4 bg-primario text-black rounded px-4 py-2">Choose Plan</button>
        </div>
    </motion.div>
);

export const PricingPlans = () => (
    <div className="flex flex-wrap justify-around items-start p-4 pb-40">
        <PricingPlan plan={{ name: 'Plan 1', price: '$10', features: ['Feature 1', 'Feature 2', 'Feature 3'], index: 0 }} />
        <PricingPlan plan={{ name: 'Plan 2', price: '$20', features: ['Feature 1', 'Feature 2', 'Feature 3'], index: 1 }} />
        <PricingPlan plan={{ name: 'Plan 3', price: '$30', features: ['Feature 1', 'Feature 2', 'Feature 3'], index: 2 }} />
    </div>
);