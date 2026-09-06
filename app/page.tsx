import { LangProvider } from "@/lib/i18n";
import ShaderBackground from "@/components/shader-background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import {
  About,
  Contact,
  Products,
  Solutions,
  Stats,
  Why,
} from "@/components/sections";

export default function Home() {
  return (
    <LangProvider>
      <ShaderBackground />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Solutions />
        <Why />
        <About />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
