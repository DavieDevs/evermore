import { howItWorksSteps } from "@/app/lib/howItWorksSteps";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-page px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-eyebrow text-primary uppercase">How it works</p>
          <h2 className="font-serif text-4xl md:text-heading">
            Less searching, more celebrating
          </h2>
        </div>

        <ol className="mt-14 grid gap-12 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <li
              key={step.title}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span
                aria-hidden="true"
                className="font-serif text-[2.5rem] italic leading-none text-primary"
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="max-w-[300px] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
