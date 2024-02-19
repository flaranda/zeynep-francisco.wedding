import { Great_Vibes, Urbanist } from "next/font/google";

const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const urbanist = Urbanist({ subsets: ["latin"], weight: "300" });

interface TitleProps {
  titleText: string;
  subText?: string;
  white?: boolean;
  className?: string;
}

export function Title(props: TitleProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center relative mt-12 mb-16 ${props.className}`}
    >
      <h2
        className={`${vibes.className} text-6xl md:text-7xl ${
          props.white ? "text-neutral-50" : "text-stone-800"
        }`}
      >
        {props.titleText}
      </h2>
      {props.subText && (
        <sub
          className={`${urbanist.className} ${
            props.white ? "text-neutral-200" : "text-stone-600"
          } text-center text-base !italic`}
        >
          {props.subText}
        </sub>
      )}
    </div>
  );
}
