import Hero from "./components/home/Hero";
import CategoryGrid from "./components/home/CategoryGrid";
import HowItWorks from "./components/home/HowItWorks";
import FeatureVendors from "./components/home/FeatureVendors";

export default function Home() {
  return (
    <section>
      <Hero />
      <CategoryGrid />
      <HowItWorks />
      <FeatureVendors />
    </section>
  );
}
