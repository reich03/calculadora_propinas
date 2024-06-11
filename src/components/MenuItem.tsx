import { MenuItem } from "../types";
const MenuItems = ({
  producto,
  addItem,
}: {
  producto: MenuItem;
  addItem: (product:MenuItem) => void;
}) => {
  const { name, price } = producto;
//   console.log(producto);
  return (
    <>
      <button
        className="border-2 border-sky-400 p-3 w-full flex  rounded-md justify-between hover:bg-sky-200"
        onClick={() => addItem(producto)}
      >
        <span>{name}</span>
        <span>${price}</span>
      </button>
    </>
  );
};

export default MenuItems;
