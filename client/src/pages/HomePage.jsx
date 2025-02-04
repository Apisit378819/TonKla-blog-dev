import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SearchBar />
      <Footer />
    </>
  );
}
