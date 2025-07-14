import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
};
