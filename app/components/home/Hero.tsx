import VendorSearch from "../search/VendorSearch";
import Image from "next/image";
import heroImage from "@/public/images/hero2.jpg";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-page flex-wrap items-center gap-16 px-8 pb-24 pt-12">
      <div className="flex min-w-0 flex-1 basis-[520px] flex-col gap-7">
        <p className="text-eyebrow uppercase text-primary">
          Wedding vendors, thoughtfully chosen.
        </p>
        <h1 className="font-serif text-5xl leading-tight md:text-display">
          Find the people who&rsquo;ll make your day{" "}
          <em className="text-primary">feel like you.</em>
        </h1>
        <p className="max-w-[480px] text-lg leading-relaxed text-ink-soft">
          Browse photographers, venues, florists and more near you. Compare
          styles and pricing, then reach out in one place.
        </p>

        <div>
          <VendorSearch />
        </div>
      </div>
      <div className="flex flex-1 basis-[380px] justify-center">
        <div className="relative aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[50%_50%_1.5rem_1.5rem/40%_40%_1.5rem_1.5rem] bg-tint-blush">
          <Image
            src={heroImage}
            alt="Bride and groom laughing together in soft afternoon light"
            fill
            sizes="(min-width: 1024px) 460px, 100vw"
            placeholder="blur"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
