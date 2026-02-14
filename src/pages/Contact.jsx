
import ContactBackground from "../components/contact/ContactBackground";
import ContactHeader from "../components/contact/ContactHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactSidePanel from "../components/contact/ContactSidePanel";
import ContactFooterQuote from "../components/contact/ContactFooterQuote";
import TsushimaBackground from "../components/contact/TsushimaBackground";

const Contact = () => (
  <section className="relative min-h-screen overflow-hidden font-contact text-[#e6e1d6] bg-[#0a0a0a]">

    {/* GLOBAL PAGE BACKGROUND */}
    <TsushimaBackground />

    {/* ATMOSPHERIC MOTION (petals / ash) */}
    <ContactBackground />

    {/* CONTENT */}
    <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <ContactHeader />

      <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
        <ContactForm />
        <ContactSidePanel />
      </div>

      <ContactFooterQuote />
    </div>

  </section>
);

export default Contact;
