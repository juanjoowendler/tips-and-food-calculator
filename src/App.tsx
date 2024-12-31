import Header from "./components/Header/Header.tsx";
import MenuItem from "./components/MenuItem/MenuItem.tsx";
import OrderContent from "./components/OrderContent/OrderContent.tsx";
import OrderTotal from "./components/OrderTotal/OrderTotal.tsx";
import TipPercentageForm from "./components/TipPercentageForm/TipPercentageForm.tsx";
import useOrder from "./hook/useOrder.ts";
import { menuItems } from "./data/db.ts";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-20 grid md:grid-cols-2 space-x-5">
        <div className="border border-gray-300 rounded-lg p-4">
          <h2 className="font-black text-4xl">Menú</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
        <div>
          <h2 className="text-4xl font-black">Consumo</h2>
        </div>
          {order.length > 0 ? (
              <>
                <OrderContent order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} tip={tip} />
                <OrderTotal tip={tip} order={order} placeOrder={placeOrder} />
              </>
            ) : (
              <p className="text-center m-10">La orden esta vacia</p>
            )
          }
        </div>
      </main>
    </>
  );
}

export default App;
