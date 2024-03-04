import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  banners: {
    link: string;
    title: string;
    cta: string;
    image: ImageWidget;
    darkText: boolean;
  }[];
  quantity: string;
}

export default function MultipleBanners({ banners, quantity }: Props) {
  return (
    <div class="multipleBanners">
      <div class={`md:grid md:grid-cols-${quantity}`}>
        {banners.map((banner) => {
          return (
            <div class={`relative h-64 md:h-80 xl:h-[460px] 2xl:h-[520px]`}>
              <div class="h-full">
                <image
                  src={banner.image}
                  alt={banner.title}
                  class="object-cover object-center h-full w-full"
                  loading="lazy"
                />

                <div
                  class={`absolute top-1/2 left-0 right-0 mx-auto text-center transform -translate-y-1/2 ${
                    banner.darkText ? "text-black" : "text-white"
                  }`}
                >
                  <h4 class="font-bold text-xl capitalize">{banner.title}</h4>

                  <div class="flex justify-center">
                    <a
                      class={`uppercase text-sm mt-6 block pb-1 border-b ${
                        banner.darkText ? "border-black" : "border-white"
                      }`}
                      href={banner.link}
                    >
                      {banner.cta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
