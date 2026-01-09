import { HeroSection } from "@/components/sections/hero";
import { QuoteImageSection } from "@/components/sections/quote-image";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <QuoteImageSection />
    </main>
  );
}
