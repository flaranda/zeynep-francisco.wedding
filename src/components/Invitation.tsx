import { Great_Vibes, Urbanist } from "next/font/google";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const urbanist = Urbanist({ subsets: ["latin"], weight: "400" });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export function Invitation() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-full md:w-128 md:h-256 md:shadow-2xl border border-neutral-200 bg-neutral-50 overflow-hidden select-none pointer-events-none">
      <div className="absolute top-0 w-full h-full">
        <Image
          src="/images/hexagon-bold.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -top-[8.5rem] -left-[7rem] w-[17rem] md:w-80 rotate-[10deg]"
        />
        <Image
          src="/images/hexagon-bold.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-[8rem] -right-[7rem] w-[17rem] md:w-80 rotate-[125deg]"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -top-[8.5rem] -left-[7rem] w-[17rem] md:w-80 rotate-[10deg]"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-[8rem] -right-[7rem] w-[17rem] md:w-80 rotate-[125deg]"
        />
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
        <Image
          src="/images/leaves-2.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-[5rem] left-[14rem] md:top-[5rem] md:left-[20rem] m-auto w-7 md:w-9 rotate-[72deg]"
        />
        <Image
          src="/images/leaves-2.svg"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-[7rem] left-[6rem] md:bottom-[7rem] md:left-[9rem] m-auto w-7 md:w-9 rotate-[165deg] -scale-y-100"
        />
      </div>
      <h1 className={`${vibes.className} text-center text-stone-800 md:mt-4`}>
        <p className="text-6xl md:text-7xl">Zeynep</p>
        <p className="text-4xl">- {t("invitation.and")} -</p>
        <p className="text-6xl md:text-7xl">Francisco</p>
      </h1>
      <sub className={`${urbanist.className} text-stone-500 md:text-sm`}>
        {t("invitation.date")}
      </sub>
    </div>
  );
}
