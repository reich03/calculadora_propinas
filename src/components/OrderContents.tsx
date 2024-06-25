import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type orderProps = { order: OrderItem[]; dispatch: React.DispatchWithoutAction };
const OrderContents = ({ order, dispatch }: orderProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="mt-10 space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-[#F1FBFF] p-2 rounded-lg
              border-t border-gray-100 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)} - {item.quantity}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <div className="flex items-center">
              <button
                className="w-8 h-8 font-black text-white bg-red-600 rounded-full"
                onClick={() =>
                  dispatch({ type: "delete-to-order", payload: { item } })
                }
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContents;
