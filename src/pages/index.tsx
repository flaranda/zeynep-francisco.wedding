import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Invitation } from "@/components/Invitation";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Timeline } from "@/components/Timeline";
import { Title } from "@/components/Title";
import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";

export default function Index() {
  return (
    <main className="flex flex-col items-center bg-neutral-100">
      <header className="flex fixed z-10 w-screen p-6 justify-end">
        <Bars3Icon className="w-9 cursor-pointer" />
      </header>
      <section className="flex items-center justify-center w-screen h-svh md:py-6">
        <Invitation />
      </section>
      <section className="flex flex-col items-center justify-center w-screen my-16 max-w-[64rem]">
        <Title text="Our Story" />
        <Avatar />
      </section>
      <section className="flex flex-col items-center justify-center w-screen my-16 max-w-[64rem]">
        <Title text="Timeline" />
        <Timeline />
      </section>
      <section className="flex flex-col items-center justify-center w-screen my-16 max-w-[64rem]">
        <Title text="Menu" />
        <Menu />
      </section>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "timeline"])),
    },
  };
}
