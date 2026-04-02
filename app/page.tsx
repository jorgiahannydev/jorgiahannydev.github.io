import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OrnamentDivider from "@/components/OrnamentDivider";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OrnamentDivider bg="#f5efe6" />
        <About />
        <OrnamentDivider bg="#ede5d8" />
        <Skills />
        <OrnamentDivider bg="#f5efe6" />
        <Experience />
        <OrnamentDivider bg="#ede5d8" />
        <Portfolio />
        <OrnamentDivider bg="#f5efe6" />
        <Education />
        <OrnamentDivider bg="#ede5d8" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
