import {
  Dancing_Script,
  Great_Vibes,
  Ms_Madi,
  Qwitcher_Grypen,
} from "next/font/google";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const dancing = Dancing_Script({ subsets: ["latin"] });
const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const madi = Ms_Madi({ subsets: ["latin"], weight: "400" });
const grypen = Qwitcher_Grypen({ subsets: ["latin"], weight: "400" });

export function Invitation() {
  const { t } = useTranslation("home");
  return (
    <div className="flex relative w-screen items-center h-screen max-h-screen justify-center bg-neutral-100">
      <div className="absolute top-0 w-screen h-screen">
        <Image
          src="/images/frame.png"
          alt=""
          width={100}
          height={100}
          className="absolute -top-2 -left-2 w-60 -scale-x-100"
        />
        <Image
          src="/images/frame.png"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-2 -right-2 w-60 -scale-y-100"
        />
        <Image
          src="/images/hexagon-bold.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 animate-spin-hexagon-bold"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 animate-spin-hexagon-thin"
        />
        <Image
          src="/images/hexagon-thin.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80 animate-spin-hexagon-thin-extra"
        />
        <Image
          src="/images/crown-1.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80"
        />
        <Image
          src="/images/crown-2.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto w-80"
        />
      </div>
      <h1 className={`${vibes.className} text-center text-stone-800`}>
        <p className="text-6xl">Zeynep</p>
        <p className="text-4xl">- {t("and")} -</p>
        <p className="text-6xl">Francisco</p>
      </h1>
    </div>
  );
}
