import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600"] });

export function Menu() {
  return (
    <div className="flex flex-col w-full items-center justify-center px-5">
      <h3 className={`${urbanist.className} text-xl font-black mb-4 mt-10`}>
        Cocktail
      </h3>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Salmorejo con lascas de jamón ibérico
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Mazamorra de almendra con membrillo y pasas
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Croquetas cremosas de gambas al ajillo
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Croquetas de espinacas con piñones
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Croquetas cremosas de puchero con jamón ibérico
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Berenjenas fritas tradicionales de Casa Pepe
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Ensaladilla de atún con carpaccio de pulpo y pimentón de La Vera
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Pincho de pulpo a la parrilla con milhojas de patata y mayonesa de
        pimentón ahumado
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Ensalada de tomate cherry asado, mozzarella y pesto de anacardo
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Rosada frita al limón con mayonesa cítrica
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Molletito de pringá del cocido
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Taco crujiente de carrillada, mouse de aguacate y pico de gallo
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Mouse de queso azul y manzana caramelizada
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Crujiente de pisto
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}></p>
      <p className={`${urbanist.className} text-center my-2.5`}></p>
      <h3 className={`${urbanist.className} text-xl font-black mb-4 mt-10`}>
        Comida
      </h3>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Corvina salvaje asada con salsa Menier y verduras de temporada
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Pierna de cordero asada y deshuesada, salsa de naranja y frutos secos
        caramelizados
      </p>
      <p className={`${urbanist.className} text-center my-2.5`}>
        Tarta de quesos, helado de frambuesa y frutos rojos
      </p>
      <h3
        className={`${urbanist.className} text-xl font-black my-3 mb-4 mt-10`}
      >
        Bodega
      </h3>
      <h3
        className={`${urbanist.className} text-xl font-black my-3 mb-4 mt-10`}
      >
        Fiesta
      </h3>
    </div>
  );
}
