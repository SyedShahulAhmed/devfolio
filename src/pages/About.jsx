import AboutLayout from "../components/about/AboutLayout";
import AboutHeader from "../components/about/AboutHeader";
import WantedPoster from "../components/about/WantedPoster";
import JournalSection from "../components/about/JournalSection";

const About = () => {
  return (
    <AboutLayout>
      <AboutHeader />

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <WantedPoster />
        </div>

        <div className="lg:col-span-8">
          <JournalSection />
        </div>
      </div>
    </AboutLayout>
  );
};

export default About;
