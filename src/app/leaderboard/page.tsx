'use client'

import Image from "next/image";
import { motion } from "motion/react";

export default function Leaderboard() {
  return (
    <div className="min-h-full flex items-center justify-center bg-[url(/images/background.png)] bg-top-left bg-no-repeat bg-cover">
      <div className="max-w-[80%] py-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col justify-center items-center space-y-52 mb-20"
        >
          <Image
            width={0}
            height={0}
            sizes="1"
            className="w-full"
            src="/images/smart-rider-challenge.png"
            alt="smart rider challenge"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#00243F]/70 rounded-[128px] p-32 space-y-28 mb-28"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-9xl text-center text-[#FFDE27]"
          >
            TOP 1 LEADERBOARD
          </motion.h1>

          <ul className="space-y-8 uppercase">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full flex items-center space-x-2 text-nowrap text-6xl"
            >
              <p className="w-[50%] truncate">1. HANGGI</p>
              <p className="w-[30%] truncate">BEKASI</p>
              <p className="w-[20%] flex justify-end space-x-1">
                <span className="truncate">1200</span>
                <span>KM</span>
              </p>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Image
            width={0}
            height={0}
            sizes="1"
            src="/images/download.png"
            className="w-[80%] px-8 mt-60 mx-auto"
            alt="download aplikasi"
          />
        </motion.div>
      </div>
    </div>
  );
}
