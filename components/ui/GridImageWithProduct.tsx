import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  invertPosition?: boolean;
  image: ImageWidget;
  title: string;
  icon?: ImageWidget;
  subTitle: string;
  cta: string;
  link: string;
  darkText?: boolean;
  darkCard?: boolean;
}

export default function GridImageWithProduct(
  {
    invertPosition,
    image,
    title,
    icon,
    subTitle,
    cta,
    link,
    darkText,
    darkCard,
  }: Props,
) {
  return (
    <div>
      <div
        class={`md:flex items-center md:${
          invertPosition ? "flex-row-reverse" : "flex-row"
        } ${darkText ? "text-black" : "text-white"}`}
      >
        <a class={`md:w-1/2`} href={link}>
          <img
            src={image}
            class="h-64 md:h-80 xl:h-[460px] 2xl:h-[520px] w-full object-cover"
          />
        </a>

        <div
          class={`${
            darkCard ? "bg-[#2d2d2d]" : "bg-white"
          } h-64 md:h-80 xl:h-[460px] 2xl:h-[520px] md:w-1/2 self-stretch flex justify-center items-center flex-col`}
        >
          {icon ? <img src={icon} /> : ""}
          <h3 class="uppercase text-2xl md:text-3xl">{title}</h3>
          <h4 class="px-8 text-center leading-7 my-6 text-sm opacity-90">
            {subTitle}
          </h4>

          <a
            href={link}
            class={`${
              darkCard ? "bg-white text-black" : "bg-[#2d2d2d] text-white"
            } p-3 uppercase`}
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
}
