import { useEffect, useState } from "react";
import { menuItems } from "./data/db";
import { MenuItem } from "./types";
import MenuItems from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageFor from "./components/TipPercentageFor";
function App() {
  const [products, setProducts] = useState<MenuItem[]>([]);
  const { order, addItem, deleteItem, tip, setTip, placeOrder } = useOrder();
  useEffect(() => {
    setProducts(menuItems);
  }, []);
  // console.log(products);
  return (
    <>
      <header className="bg-sky-500 py-5 ">
        <h1 className="text-[2rem] text-center font-bold text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto  pt-10 md:py-20 grid md:grid-cols-2 ">
        <div className="md:p-5 p-5 pt-2">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {products.map((item) => (
              <MenuItems key={item.id} producto={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 pb-8 md:pb-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} deleteItem={deleteItem} />
              <TipPercentageFor setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center font-bold">la orden esta Vacia</p>
          )}
        </div>
      </main>

      <footer className="bg-sky-500 py-5 ">
        <h2 className="text-center font-bold text-white">
          Derechos Reservados Jhojan Grisales
        </h2>
      </footer>
    </>
  );
}

export default App;
