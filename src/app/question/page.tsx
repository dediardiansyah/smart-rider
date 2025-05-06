'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

type QuestionType = {
    question: string;
    options: string[];
    correctAnswer: string;
};

const questions: QuestionType[] = [
    { question: "Kapasitas mesin Yamaha Aerox Alpha Turbo?", options: ['155cc', '155,7cc'], correctAnswer: '155,7cc' },
    { question: "Top speed Yamaha R15M Connected ABS?", options: ['140 km/jam', '150 km/jam'], correctAnswer: '150 km/jam' },
    { question: "Jumlah silinder Kawasaki Ninja ZX-25R?", options: ['2 silinder', '4 silinder'], correctAnswer: '4 silinder' },
    { question: "Kapasitas tangki Yamaha NMAX 155?", options: ['7,1 liter', '6,6 liter'], correctAnswer: '7,1 liter' },
    { question: "Jumlah gigi transmisi Yamaha R25?", options: ['5-speed', '6-speed'], correctAnswer: '6-speed' },
];

export default function QuestionPage() {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);

    const [score, setScore] = useState(250);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ text: string; color: string } | null>(null);
    const [disabled, setDisabled] = useState(false);
    const [finished, setFinished] = useState(false);

    const current = questions[currentIndex];

    const handleAnswer = (answer: string) => {
        if (disabled) return;
        setDisabled(true);

        const isCorrect = answer === current.correctAnswer;
        const change = isCorrect ? 25 : -25;

        setScore(prev => prev + change);
        setFeedback({
            text: `${isCorrect ? '+' : ''}${change}KM`,
            color: isCorrect ? '#FFDE27' : '#FF1E1E',
        });

        if (isCorrect) videoRef.current?.play();

        setTimeout(() => {
            setFeedback(null);
            setDisabled(false);
            videoRef.current?.pause();

            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                setFinished(true);
            }
        }, 3000);
    };

    const handleLeaderboard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/leaderboard');
    };

    return (
        <div className="min-h-full flex justify-center relative overflow-hidden">
            {/* Background video */}
            <video
                ref={videoRef}
                src="/videos/road.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
            />

            <div className="w-[80%] py-40 px-20 flex flex-col z-20">
                {/* Score */}
                <div className="w-full flex flex-col justify-center items-center space-y-6 mb-40">
                    <h1 className="text-8xl text-white">SCORE DISTANCES</h1>
                    <motion.p
                        key={score} // trigger animate tiap score berubah
                        initial={{ scale: 1 }}
                        animate={{ scale: [1.2, 1], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 0.4 }}
                        className="text-9xl font-medium text-white"
                    >
                        {score}KM
                    </motion.p>
                </div>

                {/* Feedback */}
                <div className="h-40 flex justify-center items-center">
                    <AnimatePresence>
                        {feedback && (
                            <motion.p
                                key={feedback.text}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-9xl text-center mb-10"
                                style={{ color: feedback.color }}
                            >
                                {feedback.text}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Question box */}
                <motion.div
                    key={currentIndex} // animate tiap ganti soal
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/60 rounded-[128px] p-32 space-y-28 mb-28 flex flex-col items-center justify-center"
                >
                    {finished ? (
                        <>
                            <motion.p
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, bounce: 0.5, type: "spring" }}
                                className="text-9xl text-center text-white"
                            >
                                🎉 Sudah selesai!
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={handleLeaderboard}
                                className="px-44 py-16 rounded-[229px] text-black text-7xl bg-[#FFDE27] hover:bg-yellow-400 transition mt-16"
                            >
                                Lihat Leaderboard
                            </motion.button>
                        </>
                    ) : (
                        <>
                            <p className="text-7xl text-center leading-normal text-white">{current.question}</p>
                            <div className="space-y-8 w-full">
                                {current.options.map((option) => (
                                    <motion.label
                                        whileHover={!disabled ? { scale: 1.05 } : {}}
                                        whileTap={!disabled ? { scale: 0.95 } : {}}
                                        key={option}
                                        className={`group flex items-center justify-center w-full h-40 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                            } bg-[#F8FBFF]/67 rounded-[160px] text-6xl text-black`}
                                    >
                                        <input
                                            type="radio"
                                            name="answer"
                                            className="hidden"
                                            disabled={disabled}
                                            onChange={() => handleAnswer(option)}
                                        />
                                        <span className="group-[:has(input:checked)]:bg-[#D0E8FF] w-full h-full flex items-center justify-center rounded-[160px]">
                                            {option}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Bike image with slide-up animation */}
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bottom-0 inset-x-0 h-[50%] z-10"
            >
                <Image width={0} height={0} sizes="1" className="w-full" src="/images/bike.png" alt="bike" />
            </motion.div>
        </div>
    );
}
