const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full text-white text-center px-2">
      <h2 className="font-lobster text-4xl text-yellow-500 lg:text-6xl">
        Come Visit Us!
      </h2>
      <div className="flex flex-col gap-8 w-full lg:w-[70%] 2xl:w-[50%]">
        <p className="text-sm lg:text-lg">
          We're more than just a place to eat — we're a destination for flavor,
          fun, and community. Whether you're stopping by for your daily taco
          fix, bringing friends for a casual night out, or just looking to
          brighten your day with something delicious, Sol y Taco is ready to
          welcome you with open arms and a plate full of sunshine.
        </p>
        <p className="text-sm lg:text-lg">
          Our doors are always open to taco lovers, food explorers, and anyone
          who believes that good food brings people together. Every visit is a
          chance to taste something new, share a smile, and feel the warmth that
          makes Sol y Taco special.
        </p>
        <p className="text-sm lg:text-lg mb-12">
          <b>📍 Find us at 245 Peachtree Center Ave NE, Atlanta, GA 30303</b>{" "}
          Come by, grab a seat, and let the flavors, colors, and energy of Sol y
          Taco make your day a little brighter. We can't wait to serve you!
        </p>
      </div>
    </section>
  );
};

export default Footer;
