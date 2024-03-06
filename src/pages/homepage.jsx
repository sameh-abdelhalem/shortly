import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Shorten from "../components/Shorten";
import Stats from "../components/Stats";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Shorten />
      <Stats />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
