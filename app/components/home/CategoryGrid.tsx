import { categories } from "@/app/lib/categories";
import Link from "next/link";
import Image from "next/image";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-page px-8 pb-28 pt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-serif text-heading">
          Start with what matters most
        </h1>
        <Link
          href={`/vendors/categories`}
          className="shrink-0 underline underline-offset-4 hover:text-primary"
        >
          All Categories
        </Link>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <li key={category.value}>
            <Link
              href={`/vendors?category=${category.value}`}
              className="group flex flex-col items-center gap-4 text-center hover:text-primary"
            >
              <div
                className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1`}
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span>{category.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
