import { useEffect, useState, useReducer } from "react";
import { menuItems } from "./data/db";
import { MenuItem, OrderItem } from "./types";
import MenuItems from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageFor from "./components/TipPercentageFor";
import { ordersReducer, initialState } from "./reducers/order-reducers";
function App() {
  const [products, setProducts] = useState<MenuItem[]>([]);
  const { order, addItem, deleteItem } = useOrder();
  const [state, dispatch] = useReducer(ordersReducer, initialState);
  const [tip, setTip] = useState(0);

  useEffect(() => {
    setProducts(menuItems);
  }, []);

  const placeOrder = () => {
    dispatch({ type: "reset-order" });
    setTip(0);
  };
  // console.log(products);
  return (
    <>
      <header className="py-5 bg-sky-500 ">
        <h1 className="text-[2rem] text-center font-bold text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="grid pt-10 mx-auto max-w-7xl md:py-20 md:grid-cols-2 ">
        <div className="p-5 pt-2 md:p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {products.map((item) => (
              <MenuItems key={item.id} producto={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="p-5 pb-8 space-y-10 border border-dashed rounded-lg border-slate-300 md:pb-5">
          {state?.order.length > 0 ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageFor setTip={setTip} tip={tip} />
              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="font-bold text-center">la orden esta Vacia</p>
          )}
        </div>
      </main>

      <footer className="py-5 bg-sky-500 ">
        <h2 className="font-bold text-center text-white">
          Derechos Reservados Jhojan Grisales
        </h2>
      </footer>
    </>
  );
}

export default App;
