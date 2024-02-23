import { Great_Vibes, Urbanist } from "next/font/google";

import { Title } from "../Title";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export function YouAreInvited() {
  const { t } = useTranslation();

  return (
    <section className="flex relative flex-col items-center w-screen max-md:min-h-svh md:h-[44rem] py-16 bg-yellow-100 bg-[url('/images/hacienda.webp')] bg-cover bg-no-repeat bg-center max-md:bg-[-31rem_center]">
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-60 z-0" />
      <Title
        white
        titleText={t("invitation.title")}
        subText={t("invitation.subtitle")}
        className="max-md:!mt-8"
      />
      <div className="flex flex-row max-md:flex-col justify-center relative w-full max-w-[36rem] mt-6 mb-12 max-md:px-5">
        <div className="flex flex-1 justify-center items-center">
          <h3
            className={`${vibes.className} font-black text-neutral-50 text-4xl md:text-5xl`}
          >
            {t("invitation.where")}
          </h3>
        </div>
        <div className="flex flex-1 flex-col">
          <Link
            href="https://maps.app.goo.gl/HWcewL3GMMAj8eko9"
            target="blank"
            className={`${urbanist.className} text-neutral-50 underline text-xl font-black max-md:text-center`}
          >
            Hacienda Santa María
          </Link>
          <p
            className={`${urbanist.className} text-neutral-50 text-base max-md:text-center`}
          >
            Ctra. de las Ermitas, 101 - 14012 Córdoba
          </p>
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col justify-center relative w-full max-w-[36rem] max-md:px-5">
        <div className="flex flex-1 justify-center">
          <h3
            className={`${vibes.className} font-black text-neutral-50 text-4xl md:text-5xl`}
          >
            {t("invitation.when")}
          </h3>
        </div>
        <div className="flex flex-1 flex-col">
          <p
            className={`${urbanist.className} text-neutral-50 text-xl font-black max-md:text-center`}
          >
            {t("invitation.date")}
          </p>
          <p
            className={`${urbanist.className} text-neutral-50 text-base max-md:text-center`}
          >
            {t("invitation.ceremonyStarts")}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center relative w-full max-w-[36rem] max-md:px-5 md:mt-24 mt-12 max-md:pb-12">
        <Link
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjZzZjYwOTlvZHQwanVuMzV2dGswczd0YWggYTliYjYyYWZjNTkxY2JmMTYzOWI4MDhmYTA5ZTVkYWE3M2ViM2FjOTkxN2I1YzllY2Q5NjRhMjJkYzRhNDkxYUBn&tmsrc=a9bb62afc591cbf1639b808fa09e5daa73eb3ac9917b5c9ecd964a22dc4a491a%40group.calendar.google.com"
          target="blank"
        >
          <button
            className={`${urbanist.className} relative btn btn-outline text-neutral-50 border-neutral-50 hover:bg-neutral-50 hover:text-stone-800 font-normal uppercase`}
          >
            {t("invitation.saveTheDate")}
          </button>
        </Link>
      </div>
    </section>
  );
}
