import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";

import { Invitation } from "@/components/Invitation";
import { Timeline } from "@/components/Timeline";
import { Title } from "@/components/Title";
import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import { YouAreInvited } from "@/components/sections/YouAreInvited";
import { OurStory } from "@/components/sections/OurStory";

export default function Index() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center bg-neutral-50">
      <Head>
        <title key="title">{t("title")}</title>
      </Head>
      <header className="flex fixed z-10 w-screen p-6 justify-end">
        <div className="flex items-center justify-center w-12 h-12 bg-neutral-50 rounded-full hover:shadow-lg transition-all duration-500">
          <Bars3Icon className="w-9 cursor-pointer text-stone-900" />
        </div>
      </header>
      <section className="flex items-center justify-center w-screen h-svh md:py-6">
        <Invitation />
      </section>
      <YouAreInvited />
      <OurStory />
      <section className="flex flex-col items-center justify-center w-screen py-16 max-w-[64rem]">
        <Title
          titleText={t("timeline.title")}
          subText={t("timeline.subtitle")}
        />
        <Timeline />
      </section>
      <section className="flex flex-col items-center justify-center w-screen py-16 max-w-[64rem]">
        <Title titleText={t("menu.title")} />
        <Menu />
      </section>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "index",
        "invitation",
        "timeline",
        "menu",
      ])),
    },
  };
}
