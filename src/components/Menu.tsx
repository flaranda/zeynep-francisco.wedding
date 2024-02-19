import { Urbanist } from "next/font/google";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600"] });

const menuSections = [
  {
    key: "cocktail",
  },
  {
    key: "lunch",
  },
  {
    key: "drink",
  },
];

export function Menu() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-center justify-center px-5">
      {menuSections.map(({ key }) => (
        <Fragment key={key}>
          <h3
            className={`${urbanist.className} text-2xl font-black mb-4 mt-10 text-stone-800`}
          >
            {t(`menu.${key}.title`)}
          </h3>
          {(t(`menu.${key}.items`, { returnObjects: true }) as string[]).map(
            (item, index) => (
              <p
                className={`${urbanist.className} text-center my-2.5 text-stone-700`}
                key={index}
              >
                {item}
              </p>
            )
          )}
        </Fragment>
      ))}
    </div>
  );
}
