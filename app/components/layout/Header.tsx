import Link from "next/link";

const navLinks = [
  { href: "/vendors", label: "Find vendors" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/for-vendors", label: "For vendors" },
];

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-page items-baseline justify-between px-8 py-7">
      <Link href="/" className="font-serif text-3xl leading-none">
        Evermore
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-link-hover"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-baseline gap-3">
        <Link
          href="/sign-in"
          className="px-4 py-3 transition-colors hover:text-link-hover"
        >
          Sign in
        </Link>
        <Link
          href="/sign-up"
          className="rounded-full bg-ink px-5 py-3 text-surface transition-opacity hover:opacity-90"
        >
          Start planning
        </Link>
      </div>
    </header>
  );
}
