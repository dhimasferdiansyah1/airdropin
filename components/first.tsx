import Image from "next/image";

const airdrops = [
  {
    name: "HAMSTER KOMBAT",
    date: "25 Juni 2024",
    image: "/hamsterkombat.jpg",
    link: "https://t.me/hamster_kombAt_bot/start?startapp=kentId6030949571",
  },
  {
    name: "BLUM",
    date: "September 2024",
    image: "/blum.png",
    link: "https://t.me/BlumCryptoBot/app?startapp=ref_DlrerK00aH",
  },
  {
    name: "PIXELVERSE",
    date: "01 Juli 2024",
    image: "/pixelverse.webp",
    link: "https://t.me/pixelversexyzbot?start=2Let's fight for rewards together!Take your welcome bonus:💸 2,000 Coins + 2X multiplier for the first 24 hours🔥 10,000 Coins + 3X multiplier if you have Telegram Premium",
  },
  {
    name: "CATIZEN",
    date: "Belum ada info",
    image: "/catizen.png",
    link: "https://t.me/catizenbot/gameapp?startapp=r_1312_20428216",
  },
  {
    name: "JARVISBOT",
    date: "Belum ada info",
    image: "/jarvisbot.jpeg",
    link: "https://t.me/jarvisbot_ai_bot/jarvisbot?startapp=8Y3NKADV",
  },
  {
    name: "TRONIX",
    date: "Belum ada info",
    image: "/tronix.jpeg",
    link: "https://t.me/tronixapp_bot?start=6030949571",
  },
  {
    name: "MEMELAND",
    date: "Belum ada info",
    image: "/memeland.png",
    link: "https://t.me/metaland_bot/click?startapp=6030949571",
  },
  {
    name: "TIMEFARM",
    date: "Belum ada info",
    image: "/timefarm.png",
    link: "https://t.me/TimeFarmCryptoBot?start=1syd044VYtDSpq6Gw",
  },
  {
    name: "TAPCOINSBOT",
    date: "Belum ada info",
    image: "/tapcoinsbot.jpeg",
    link: "https://t.me/TapCoinsBot?start=ref_yNmfXz",
  },
  {
    name: "YESCOIN",
    date: "jUNI 2024",
    image: "/yescoin.jpg",
    link: "https://t.me/theYescoin_bot/Yescoin?startapp=RVEtli",
  },
  {
    name: "TAPSWAP",
    date: "01 Juli 2024",
    image: "/tapswap.png",
    link: "https://t.me/tapswap_mirror_bot?start=r_6413172087",
  },
];

export default function First() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start mx-4">
          <h1 className="text-4xl font-bold mt-8 text-slate-900">
            List Garapan Airdrop
          </h1>
          <p className="text-lg text-slate-500 font-medium mt-2">
            Jangan lewatkan kesempatan untuk mendapatkan koin gratis. Mulailah
            berburu airdrop bersama 🔥
          </p>
          <div className=" flex justify-start w-full mt-4">
            <div className="text-sm border border-slate-200 bg-slate-100 rounded-md p-2 text-slate-500">
              Silahkan klik kartu dibawah ini untuk membuka link airdrop, anda
              akan diarahkan ke telegram!
            </div>
          </div>
          <p className="text-slate-800 font-bold mt-4">Klik 👇</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 w-full gap-4">
            {airdrops.map((airdrop) => (
              <a
                key={airdrop.name} // Menambahkan key untuk setiap elemen dalam map
                target="_blank"
                href={airdrop.link}
                className="rounded-md p-4 bg-blue-100 border border-blue-400 w-full hover:bg-blue-200 hover:border-blue-500 hover:duration-300 duration-200"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-4">
                    <Image
                      src={airdrop.image}
                      alt="logo"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col">
                      <p className="text-slate-800 font-bold">{airdrop.name}</p>
                      <p className="text-blue-400">{airdrop.date}</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-square-arrow-out-up-right text-blue-400"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
