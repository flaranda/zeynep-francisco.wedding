import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const timelineData: Array<{ icon: string; key: string; placeUrl: string }> = [
  {
    icon: "/images/transport.svg",
    key: "stop1",
    placeUrl: "https://maps.app.goo.gl/Y9guA7AKsNB3bWLu9",
  },
  {
    icon: "/images/transport.svg",
    key: "stop2",
    placeUrl: "https://maps.app.goo.gl/LB6yHnBYgSthULVz8",
  },
  {
    icon: "/images/arch.svg",
    key: "ceremony",
    placeUrl: "https://maps.app.goo.gl/HWcewL3GMMAj8eko9",
  },
  {
    icon: "/images/cocktails.svg",
    key: "cocktail",
    placeUrl: "https://maps.app.goo.gl/HWcewL3GMMAj8eko9",
  },
  {
    icon: "/images/lunch.svg",
    key: "lunch",
    placeUrl: "https://maps.app.goo.gl/HWcewL3GMMAj8eko9",
  },
  {
    icon: "/images/saxophone.svg",
    key: "party",
    placeUrl: "https://maps.app.goo.gl/HWcewL3GMMAj8eko9",
  },
];

export function Timeline() {
  const { t } = useTranslation("timeline");

  return (
    <div className="flex flex-col w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((value, index) => (
          <li key={value.key} className="relative px-5">
            {index !== 0 && <hr className="!w-px bg-yellow-700" />}
            <div className="timeline-middle w-4 h-4 my-0.5 bg-yellow-600 rounded-full" />
            <div
              className={`flex flex-col !mb-8 !mt-16 ${
                index % 2
                  ? "timeline-end ml-3"
                  : "timeline-start md:text-end md:mr-3 max-md:!ml-3"
              }`}
            >
              <Image
                className={`${index % 2 ? "" : "md:self-end"} max-md:w-24`}
                alt=""
                width={["stop1", "stop2"].includes(value.key) ? 110 : 100}
                height={100}
                src={value.icon}
              />
              <h3
                className={`${urbanist.className} font-black text-xl mt-2 text-stone-900`}
              >
                {t(`${value.key}.title`)}
              </h3>
              <time
                className={`${urbanist.className} font-light text-stone-500`}
              >
                <span>{t(`${value.key}.time`)} - </span>
                <Link
                  href={value.placeUrl}
                  target="blank"
                  className="underline"
                >
                  {t(`${value.key}.place`)}
                </Link>
              </time>
              <p className={`${urbanist.className} mt-4 text-stone-800`}>
                {t(`${value.key}.description`)}
              </p>
            </div>
            <hr className="!w-px bg-yellow-700" />
          </li>
        ))}
      </ul>
    </div>
  );
}
