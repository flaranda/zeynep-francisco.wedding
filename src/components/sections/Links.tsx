import { Urbanist } from "next/font/google";
import { useTranslation } from "next-i18next";

import { Title } from "../Title";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const links = [
  {
    key: "hotels",
    url: "https://flaranda.notion.site/4709db1b2bcf4e0c865dea0a19d7fd37?v=5a18a90772fc487c8c4026af69422c7c&pvs=4",
  },
  {
    key: "hairdressers",
    url: "https://flaranda.notion.site/8aa8e0b1fa1f4db4b3336e980a613a45?v=3b16c5462a594faeb41461a9c28a7e4b&pvs=4",
  },
  {
    key: "barbershops",
    url: "https://flaranda.notion.site/6ec24eb2a505466c9723d541323933e4?v=8c3eaf306f674b0ebdae9f3e8e880b9a&pvs=4",
  },
  {
    key: "restaurants",
    url: "https://maps.app.goo.gl/mKSMnnAF3qdUsSQx8",
  },
];

export function Links() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center w-screen py-16 max-w-[64rem]">
      <Title titleText={t("links.title")} subText={t("links.subtitle")} />
      {links.map((link) => (
        <p
          key={link.key}
          className={`${urbanist.className} text-center my-2.5 text-stone-700 underline`}
        >
          <Link href={link.url} target="blank">
            {t(`links.${link.key}`)}
          </Link>
        </p>
      ))}
    </section>
  );
}
