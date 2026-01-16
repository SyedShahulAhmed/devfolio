import HomeLayout from "../components/home/HomeLayout";
import CharacterCard from "../components/home/CharacterCard";
import RightContent from "../components/home/RightContent";
import Footer from "../components/home/Footer";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="relative z-10 flex flex-col items-center px-5 pt-24 pb-20">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <CharacterCard />
          <RightContent />
        </div>
        <Footer />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
