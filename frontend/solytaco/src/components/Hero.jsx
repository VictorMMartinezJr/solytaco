import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative flex justify-center items-center w-full h-[50vh] text-white bg-center bg-cover bg-no-repeat lg:bg-bottom"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
};

export default Hero;
