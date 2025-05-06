'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [started, setStarted] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/showcase');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(/images/background.png)] bg-top-left bg-no-repeat bg-cover">
      <div className="max-w-[80%] py-40 w-full">
        <div className="flex flex-col justify-center items-center space-y-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[70%]"
          >
            <Image
              width={0}
              height={0}
              sizes="1"
              src="/images/member.png"
              alt="my yamaha motor members"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full"
          >
            <Image
              width={0}
              height={0}
              sizes="1"
              src="/images/smart-rider-challenge.png"
              alt="smart rider challenge"
              className="w-full"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {!started ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center space-y-20 w-full"
              >
                <Image
                  width={0}
                  height={0}
                  sizes="1"
                  src="/images/download.png"
                  className="w-[80%]"
                  alt="download aplikasi"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStarted(true)}
                  className="px-60 py-18 rounded-[229px] text-black/50 text-7xl"
                  style={{ background: "linear-gradient(45deg, #ffffff, #767676)" }}
                >
                  SETUJU & MULAI
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <form action="" className="w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="bg-[#003371]/70 rounded-[128px] p-32 space-y-20 mb-28"
                  >
                    <div className="space-y-8">
                      <input type="text" placeholder="NAMA" className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
                      <input type="text" placeholder="NO. WHATSAPP" className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
                      <input type="text" placeholder="KOTA DOMISILI" className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
                    </div>
                    <p className="text-6xl">
                      Mengizinkan PT YIMM untuk menggunakan informasi di atas dan menghubungi Saya melalui email dan/atau telepon atau sarana komunikasi pribadi lainnya untuk kegiatan pelayanan kepada customer.
                    </p>
                  </motion.div>
                  <div className="flex flex-col justify-center items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClick}
                      className="px-60 py-18 rounded-[229px] text-black/50 text-7xl"
                      style={{ background: "linear-gradient(45deg, #ffffff, #767676)" }}
                    >
                      KIRIM
                    </motion.button>
                  </div>
                </form>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-60"
                >
                  <Image
                    width={0}
                    height={0}
                    sizes="1"
                    src="/images/download.png"
                    className="w-[80%] px-8 mx-auto"
                    alt="download aplikasi"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
