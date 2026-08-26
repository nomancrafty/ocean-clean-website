import { Reveal } from "./Reveal";

export function SplitMedia({
  image,
  stackedImage,
  badge,
}: {
  image: string;
  stackedImage?: string;
  badge?: { value: string; label: string };
}) {
  return (
    <Reveal className="relative">
      <div
        className="min-h-[420px] sm:min-h-[470px] rounded-[22px] overflow-hidden bg-cover bg-center shadow-md"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {stackedImage && (
        <div
          className="hidden sm:block absolute -right-5.5 -top-5.5 w-[46%] min-h-[200px] rounded-[22px] overflow-hidden bg-cover bg-center border-[6px] border-white shadow-md"
          style={{ backgroundImage: `url('${stackedImage}')` }}
        />
      )}
      {badge && (
        <div className="absolute right-4.5 sm:-right-4.5 bottom-8.5 max-w-[220px] rounded-[14px] bg-amber-500 text-white px-6 py-5 shadow-lg">
          <strong className="block font-head font-extrabold text-[2.1rem] leading-none">{badge.value}</strong>
          <span className="text-[0.84rem] font-semibold opacity-95">{badge.label}</span>
        </div>
      )}
    </Reveal>
  );
}
