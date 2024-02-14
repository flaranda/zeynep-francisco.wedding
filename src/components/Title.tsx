import { Great_Vibes } from "next/font/google";

const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

interface TitleProps {
  text: string;
}

export function Title(props: TitleProps) {
  return (
    <h2
      className={`${vibes.className} text-6xl md:text-7xl text-stone-800 my-12`}
    >
      - {props.text} -
    </h2>
  );
}
