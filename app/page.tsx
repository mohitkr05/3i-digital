import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problems";
import WhatWeManage from "@/components/WhatWeManage";
import Testimonial from "@/components/Testimonial";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
// import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Problems />

        {/* <Testimonial /> */}
        {/* <WhoItsFor /> */}
        <HowItWorks />
        {/* <About /> */}
        {/* <Services /> */}
        <WhatWeManage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
