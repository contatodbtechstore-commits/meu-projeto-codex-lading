import { content } from "@/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProductOffer } from "@/components/ProductOffer";
import { LifestyleSection } from "@/components/LifestyleSection";
import { Testimonials } from "@/components/Testimonials";
import { FinalOffer } from "@/components/FinalOffer";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <Header />
      <main id="main">
        <Hero />
        <Benefits />
        <ProductOffer />
        <LifestyleSection />
        {content.testimonials.length > 0 && <Testimonials />}
        <FinalOffer />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
