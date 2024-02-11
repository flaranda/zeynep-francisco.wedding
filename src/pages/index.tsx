import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Invitation } from "@/components/Invitation";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <main>
      <header className="flex fixed z-10 w-screen p-6 justify-end">
        <Bars3Icon className="w-9" />
      </header>
      <section className="flex items-center justify-center h-screen max-h-screen w-screen overflow-hidden">
        <Invitation />
      </section>
    </main>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
