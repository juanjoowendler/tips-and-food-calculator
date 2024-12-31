import { formatCurrency } from "../../helpers/index.ts";
import { OrderItem, MenuItem } from "../../types/index.ts";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5 last-of-type: border-b items-center"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price * item.quantity)}
              </p>
              <p className="font-black">Cantidad: {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 hover:bg-red-600 p-2 text-sm font-bold text-white rounded-full"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
