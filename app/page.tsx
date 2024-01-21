"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/NavBar';
import Hero from "@/app/components/Hero";
import Loader from './components/Loader';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const controls = useAnimation();

    const sequence = async () => {
        await controls.start({ opacity: 1, transition: { duration: 1 } });
        setTimeout(() => {
        }, 1000);

        setIsLoading(false);
    };

    useEffect(() => {
        sequence();
    }, []);

    return (
        <main className="w-screen h-screen">
            {isLoading ? <Loader /> : (
                <motion.div animate={controls}>
                    <Navbar/>
                    <Hero/>
                </motion.div>
            )}
        </main>
    );
}