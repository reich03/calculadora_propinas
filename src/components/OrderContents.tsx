import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

const OrderContents = ({
  order,
  deleteItem,
}: {
  order: OrderItem[];
  deleteItem: (product: OrderItem) => void;
}) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
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
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => deleteItem(item)}
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
