import Image from "next/image";

export function Avatar() {
  return (
    <div className="flex items-center justify-center relative w-72 h-72 max-md:w-64 max-md:h-64 select-none pointer-events-none">
      <div className="absolute w-full h-full border border-yellow-600 rounded-full" />
      <Image
        src="/images/avatar.webp"
        alt=""
        width={500}
        height={500}
        className="relative rounded-full w-64 max-md:w-56 shadow-xl"
      />
      <Image
        src="/images/crown-1.svg"
        alt=""
        width={100}
        height={100}
        className="absolute w-full -scale-x-100 -scale-y-100 top-5 -left-4 rotate-[38deg]"
      />
    </div>
  );
}
