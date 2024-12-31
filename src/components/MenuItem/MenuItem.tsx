import type { MenuItem } from "../../types/index.ts";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className="w-full flex justify-between bg-gray-100 hover:bg-gray-200 text-black p-2 rounded"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}

export default MenuItem;
