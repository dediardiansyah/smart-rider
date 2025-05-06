'use client';

import Image from "next/image";
import { useState, useRef } from "react";

type QuestionType = {
    question: string;
    options: string[];
    correctAnswer: string;
};

const questions: QuestionType[] = [
    {
        question: "Kapasitas mesin Yamaha Aerox Alpha Turbo",
        options: ['155cc', '155,7cc'],
        correctAnswer: '155,7cc',
    },
    {
        question: "Top speed Yamaha R15M Connected ABS",
        options: ['140 km/jam', '150 km/jam'],
        correctAnswer: '150 km/jam',
    },
    {
        question: "Berapa jumlah silinder Kawasaki Ninja ZX-25R?",
        options: ['2 silinder', '4 silinder'],
        correctAnswer: '4 silinder',
    },
];

export default function Question() {
    const [score, setScore] = useState(250);
    const [feedback, setFeedback] = useState<{ text: string; color: string } | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (value: string) => {
        if (isDisabled) return;

        setIsDisabled(true);

        const isCorrect = value === currentQuestion.correctAnswer;

        if (isCorrect) {
            setScore(prev => prev + 25);
            setFeedback({ text: '+25KM', color: '#FFDE27' });
            videoRef.current?.play();
        } else {
            setScore(prev => prev - 25);
            setFeedback({ text: '-25KM', color: '#FF1E1E' });
            videoRef.current?.pause();
        }

        setTimeout(() => {
            setFeedback(null);
            setIsDisabled(false);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
        }, 2000);
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setIsFinished(false);
        videoRef.current?.pause();
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
                <div className="w-full flex flex-col justify-center items-center space-y-6 mb-40">
                    <h1 className="text-8xl text-white">SCORE DISTANCES</h1>
                    <p className="text-9xl font-medium text-white">{score}KM</p>
                </div>

                <div className="h-40">
                    {feedback && (
                        <p className="text-9xl text-center" style={{ color: feedback.color }}>
                            {feedback.text}
                        </p>
                    )}
                </div>

                <div className="bg-[#000000]/60 rounded-[128px] p-32 space-y-28 mb-28 flex flex-col items-center justify-center">
                    {isFinished ? (
                        <>
                            <p className="text-9xl text-center text-white">🎉 Sudah selesai!</p>
                            <button
                                className="px-44 py-16 rounded-[229px] text-black text-7xl bg-[#FFDE27] hover:bg-yellow-400 transition mt-16"
                                onClick={handleRestart}
                            >
                                 Mulai lagi
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="text-7xl text-center leading-normal text-white">{currentQuestion.question}</p>
                            <div className="space-y-8 uppercase w-full">
                                {currentQuestion.options.map((answer) => (
                                    <label key={answer} className={`group flex items-center justify-center w-full h-40 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} bg-[#F8FBFF]/67 rounded-[160px] text-6xl text-black`}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            className="hidden"
                                            value={answer}
                                            disabled={isDisabled}
                                            onChange={() => handleAnswer(answer)}
                                        />
                                        <span className="group-[:has(input:checked)]:bg-[#D0E8FF] w-full h-full flex items-center justify-center rounded-[160px]">
                                            {answer}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-[50%] z-10">
                <Image width={0} height={0} sizes="1" className="w-full" src="/images/bike.png" alt="bike" />
            </div>
        </div >
    );
}
