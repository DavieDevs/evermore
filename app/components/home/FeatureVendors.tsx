import Image from "next/image";
import Link from "next/link";
import { featureVendors } from "@/app/lib/featureVendors";

export default function FeatureVendors() {
  return (
    <section className="mx-auto max-w-page px-8 pb-28 pt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-heading">Loved by couples near you</h2>
        <Link
          href={`/vendors`}
          className="shrink-0 underline underline-offset-4 hover:text-primary"
        >
          Browse all vendors
        </Link>
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featureVendors.map((vendor) => (
          <li key={vendor.name}>
            <Link
              href={`/vendors/${vendor.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1 bg-tint-blush">
                <Image
                  src={vendor.profileImg}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <p className="text-xs uppercase tracking-[0.15em] text-ink-muted">
                  {vendor.category}
                </p>
                <h3 className="font-serif text-[1.75rem] leading-tight transition-colors group-hover:text-link-hover">
                  {vendor.name}
                </h3>
                <p className="text-[15px] text-ink-soft">
                  {vendor.city}, {vendor.state} · Starting at{" "}
                  {vendor.startingPrice}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
