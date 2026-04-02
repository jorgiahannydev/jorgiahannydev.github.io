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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OrnamentDivider bg="#fdf9f3" />
        <About />
        <OrnamentDivider bg="#f7f3ed" />
        <Skills />
        <OrnamentDivider bg="#fdf9f3" />
        <Experience />
        <OrnamentDivider bg="#f7f3ed" />
        <Portfolio />
        <OrnamentDivider bg="#fdf9f3" />
        <Education />
        <OrnamentDivider bg="#f7f3ed" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
