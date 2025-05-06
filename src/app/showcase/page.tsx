'use client';

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const MOTORS = [
    {
        name: 'Aerox',
        image: '/images/aerox-motor.png',
        logo: '/images/aerox-logo.png',
        features: [
            "155CC ENGINE + VVA",
            "YECVT",
            "CONNECTED",
            "ABS DUAL CHANNEL",
            "TRACTION CONTROL SYSTEM",
            "TURBO RIDING MODE",
            "Y-SHIFT",
        ],
    },
    {
        name: 'NMax',
        image: '/images/nmax-motor.png',
        logo: '/images/nmax-logo.png',
        features: [
            "155CC ENGINE + VVA",
            "YECVT",
            "SMART KEY SYSTEM",
            "ABS DUAL CHANNEL",
            "TRACTION CONTROL SYSTEM",
        ],
    },
];

export default function ShowCase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + MOTORS.length) % MOTORS.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % MOTORS.length);
    };

    const motor = MOTORS[currentIndex];

    return (
        <div className="min-h-full flex items-center justify-center relative bg-[radial-gradient(ellipse_at_top_left,_#e0e0e0,_#b0b0b0,_#8a8a8a)]">
            <div className="w-[80%] py-40 px-20 flex flex-col z-20 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={motor.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col justify-center items-center w-full gap-40"
                    >
                        <div className="w-full p-[50%] relative">
                            <div className="flex flex-col justify-center items-center absolute inset-0">
                                <ul className="text-center text-[#00306D] text-7xl space-y-2 ">
                                    {motor.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-[50%] relative">
                            <div className="flex flex-col justify-end items-center gap-40 absolute inset-0">
                                <div className="w-full h-full space-y-8">
                                    <Image width={0} height={0} sizes="1" className="w-full h-[90%] object-contain" src={motor.image} alt="Motor" />
                                    <Image width={0} height={0} sizes="1" className="w-full h-[10%] object-contain" src={motor.logo} alt="Logo motor" />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="px-44 py-16 rounded-[229px] text-black text-8xl"
                                        style={{ background: "linear-gradient(45deg, #ffffff, #767676)" }}
                                    >
                                        PILIH
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 my-40"
                >
                    <svg width="80" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 25L37.25 0.751289V49.2487L0.5 25Z" fill="#003270" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 my-40"
                >
                    <svg width="80" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5 25L0.75 49.2487V0.751289L37.5 25Z" fill="#003270" />
                    </svg>
                </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-[33%] rounded-t-[30%] bg-[radial-gradient(circle_at_left,_#0458A5,_#00194A)]" />
        </div>
    );
}
