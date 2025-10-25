const MenuItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={item.image}
        alt={item.imageAlt}
        className="rounded cursor-pointer hover:scale-105 transition-transform"
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-yellow-500 ">{item.name}</p>
          <p className="text-sm">$ {item.price}</p>
        </div>
        <button
          className="bg-white  text-black rounded-xl text-sm px-1 cursor-pointer hover:bg-yellow-500 transition-colors"
          onClick={() => {}}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
