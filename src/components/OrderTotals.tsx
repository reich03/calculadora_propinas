import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

const OrderTotals = ({
  order,
  tip,
  placeOrder,
}: {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);

  const totalPay = useMemo(() => tipAmount + subTotalAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a Pagar:{""}
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propina:{""}
          <span className="font-bold"> {formatCurrency(tipAmount)} </span>
        </p>

        <p>
          Total a Pagar:{""}
          <span className="font-bold">{formatCurrency(totalPay)}</span>
        </p>
      </div>
      <button
        className={`w-full p-3 uppercase text-white font-bold mt-10 ${
          totalPay == 0 ? "bg-red-500" : "bg-black "
        } `}
        disabled={totalPay == 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotals;
