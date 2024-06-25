import { MenuItem } from "../types";
import { Dispatch } from "react";

type menuProps = {
  producto: MenuItem;
  dispatch: React.DispatchWithoutAction;
};
const MenuItems = ({ producto, dispatch }: menuProps) => {
  const { name, price } = producto;
  //   console.log(producto);
  return (
    <>
      <button
        className="flex justify-between w-full p-3 border-2 rounded-md border-sky-400 hover:bg-sky-200"
        onClick={() =>
          dispatch({ type: "add-to-order", payload: { item: producto } })
        }
      >
        <span>{name}</span>
        <span>${price}</span>
      </button>
    </>
  );
};

export default MenuItems;
