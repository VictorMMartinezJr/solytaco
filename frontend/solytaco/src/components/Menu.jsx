import menuTacos from "../assets/menu-tacos.jpg";
import menuBurritos from "../assets/menu-burritos.jpg";
import menuJarrito from "../assets/menu-jarrito.jpg";
import menuMargaritas from "../assets/menu-margaritas.jpg";
const Menu = () => {
  return (
    <section
      id="menu"
      className="flex flex-col justify-center items-center font-chango mb-12 gap-8 w-full text-white text-center px-2"
    >
      <h2 className="text-xl text-yellow-500 sm:text-2xl lg:text-4xl">Menu</h2>
      {/* Menu items */}
      <div className="grid grid-cols-2 gap-2 text-yellow-500 lg:grid-cols-4 lg:text-2xl overflow-x-hidden">
        {/* Item 1 */}
        <div className="flex flex-col gap-2">
          <img
            src={menuTacos}
            alt="Tacos menu image"
            className="rounded cursor-pointer hover:scale-105 transition-transform"
          />
          <p>Tacos</p>
        </div>
        {/* Item 2 */}
        <div className="flex flex-col text-center gap-2">
          <img
            src={menuBurritos}
            alt="Burritos menu image"
            className="rounded cursor-pointer hover:scale-105 transition-transform"
          />
          <p>Burritos</p>
        </div>
        {/* Item 3 */}
        <div className="flex flex-col text-center gap-2">
          <img
            src={menuJarrito}
            alt="Jarritos menu image"
            className="rounded cursor-pointer hover:scale-105 transition-transform"
          />
          <p>Jarritos</p>
        </div>
        {/* Item 4 */}
        <div className="flex flex-col text-center gap-2">
          <img
            src={menuMargaritas}
            alt="Margarita menu image"
            className="rounded cursor-pointer hover:scale-105 transition-transform"
          />
          <p>Margaritas</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
