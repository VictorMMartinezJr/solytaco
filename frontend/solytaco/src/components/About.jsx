import bar from "../assets/bar.jpg";
import chips from "../assets/chips.jpg";
import nachos from "../assets/nachos.jpg";
import burritos from "../assets/burritos.jpg";
import logo from "../assets/logo.png";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center my-12 gap-8 w-full text-white text-center px-2"
    >
      <h2 className="font-lobster text-4xl text-yellow-500 lg:text-6xl">
        About Us
      </h2>
      {/* Intro text */}
      <div className="flex flex-col gap-8 w-full lg:w-[50%]">
        <h2 className="font-chango sm:text-xl lg:text-2xl">
          Where the sun meets flavor. Savor every taco. Embrace every smile.
        </h2>
        <p className="italic text-sm lg:text-lg">
          Atlanta's famed Sol y Taco Mexican Restuarant is back! Celebrating all
          the favorites you've come to love, along with new dishes to complement
          the season.
        </p>
      </div>

      {/* Photos */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        <img src={bar} alt="" className="rounded-lg" />
        <img src={burritos} alt="" className="rounded-lg" />
        <img src={nachos} alt="" className="rounded-lg" />
        <img src={chips} alt="" className="rounded-lg" />
      </div>

      {/* Bottom text */}
      <div className="flex flex-col gap-8 w-full lg:w-[50%]">
        <p className="font-lobster text-4xl text-yellow-500 lg:text-6xl">
          Vibrant flavors of Acapulco
        </p>
        <p className="text-sm lg:text-lg">
          Our lunch and dinner menus bring the tastes of the Guerrero region of
          Mexico to your table. Featuring the freshes of ingredients and
          incorporating the vibrant flavors of Acapulco into each freshly
          prepared meal.
        </p>
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Sol y Taco logo"
            className="w-50 h-50 lg:w-75 lg:h-75"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
