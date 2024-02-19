import { useTranslation } from "next-i18next";

import { Avatar } from "../Avatar";
import { Title } from "../Title";
import { Great_Vibes, Urbanist } from "next/font/google";

const vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export function OurStory() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center w-screen py-16 max-w-[64rem] max-md:px-5">
      <Title titleText={t("story.title")} subText={t("story.subtitle")} />
      <div className="flex flex-row max-md:flex-col items-center">
        <Avatar />
        <div className="flex flex-col flex-1 max-md:mt-12 md:ml-12">
          <p
            className={`${urbanist.className} text-stone-800`}
            dangerouslySetInnerHTML={{ __html: t("story.text") }}
          />
          <p
            className={`${vibes.className} text-stone-500 text-right text-2xl mt-4 mr-8`}
          >
            Zeynep {t("invitation.and")} Francisco
          </p>
        </div>
      </div>
    </section>
  );
}
