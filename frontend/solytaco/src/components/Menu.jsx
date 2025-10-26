import { menuItems } from "../data";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <section
      id="menu"
      className="flex flex-col justify-center items-center font-chango mb-12 gap-8 w-full text-white text-center px-2"
    >
      <h2 className="font-lobster text-4xl text-yellow-500 lg:text-6xl">
        Menu
      </h2>
      {/* Menu items */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:text-2xl overflow-hidden">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
