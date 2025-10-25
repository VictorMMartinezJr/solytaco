import About from "../About";
import Footer from "../Footer";
import Hero from "../Hero";
import Menu from "../Menu";

const Home = () => {
  return (
    <div className="w-full bg-gray-950">
      <Hero />
      <About />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
