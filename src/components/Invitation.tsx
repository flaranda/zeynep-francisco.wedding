import { Great_Vibes, Urbanist } from "next/font/google";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export function Invitation() {
  const { t } = useTranslation("home");

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-full md:w-128 md:h-256 md:shadow-2xl md:border md:border-neutral-300 bg-neutral-100 overflow-hidden select-none pointer-events-none">
      <div className="absolute top-0 w-full h-full">
        <Image
          src="/images/frame.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -top-2 -left-3 w-60 md:w-80 -scale-x-100"
        />
        <Image
          src="/images/frame.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-2 -right-3 w-60 md:w-80 -scale-y-100"
        />
        <Image
          src="/images/hexagon-bold.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 md:w-96 animate-spin-hexagon-bold"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 md:w-96 animate-spin-hexagon-thin"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 md:w-96 animate-spin-hexagon-thin-extra"
        />
        <Image
          src="/images/crown-1.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -top-5 bottom-0 right-0 left-0 m-auto w-80 md:w-96"
        />
        <Image
          src="/images/crown-2.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 -bottom-5 right-0 left-0 m-auto w-80 md:w-96"
        />
      </div>
      <h1 className={`${vibes.className} text-center text-stone-800`}>
        <p className="text-6xl md:text-7xl">Zeynep</p>
        <p className="text-4xl md:text-5xl">- {t("and")} -</p>
        <p className="text-6xl md:text-7xl">Francisco</p>
      </h1>
      <sub className={`${urbanist.className} text-stone-800 md:text-sm`}>
        {t("date")}
      </sub>
    </div>
  );
}
