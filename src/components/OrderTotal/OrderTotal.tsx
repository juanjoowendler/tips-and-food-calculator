import { useMemo } from "react";
import { formatCurrency } from "../../helpers";
import { OrderItem } from "../../types";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const total = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold"> {formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propina:
          <span className="font-bold"> {formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar:
          <span className="font-bold"> {formatCurrency(total)}</span>
        </p>
      </div>
      <button 
      className="inline-block w-full my-5 px-8 py-2 font-bold leading-normal text-center text-white align-middle bg-blue-500 border-0 hover:bg-blue-600 rounded-lg text-sm"
      disabled={subTotalAmount === 0} /* habilita si subTotalAmount !== 0 unicamente */
      onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  );
}
