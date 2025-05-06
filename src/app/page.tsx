import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full flex items-center justify-center bg-[url(/images/background.png)] bg-top-left bg-no-repeat bg-cover">
      <div className="max-w-[80%] py-40">
        <div className="w-full flex flex-col justify-center items-center space-y-52 mb-20">
          <Image width={0} height={0} sizes="1" className="w-[70%]" src="/images/member.png" alt="my yamaha motor members" />
          <Image width={0} height={0} sizes="1" className="w-full" src="/images/smart-rider-challenge.png" alt="smart rider challenge" />
        </div>
        <form action="" className="w-full">
          <div className="bg-[#003371]/70 rounded-[128px] p-32 space-y-20 mb-28">
            <div className="space-y-8">
              <input type="text" placeholder="NAMA" className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
              <input type="text" placeholder="NO. WHATSAPP" className="px-20 h-40 text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
              <input type="text" placeholder="KOTA DOMISILI" className="px-20 h-40  text-black bg-[#F8FBFF]/67 rounded-[160px] w-full text-7xl" />
            </div>
            <p className="text-6xl">Mengizinkan PT YIMM untuk menggunakan informasi di atas dan menghubungi Saya melalui email dan/atau telepon atau sarana komunikasi pribadi lainnya untuk kegiatan pelayanan kepada customer.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className="px-60 py-18 rounded-[229px] text-black/50 text-7xl"
              style={{ background: "linear-gradient(45deg, #ffffff, #767676)" }}
            >
              SETUJU & MULAI
            </button>
          </div>
        </form>
        <Image width={0} height={0} sizes="1" src="/images/download.png" className="w-[80%] px-8 mt-60 mx-auto" alt="download aplikasi" />
      </div>
    </div>
  );
}
