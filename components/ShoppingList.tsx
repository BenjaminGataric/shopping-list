"use client";
import { useState } from "react";
import { startingItems } from "@/data/item";
import ItemRow from "@/components/ItemRow";
import AddItemForm from "@/components/AddItemForm";

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [items, setItems] = useState<Item[]>(startingItems);
  const [query, setQuery] = useState("");
  const [sorted, setSorted] = useState(false);
  const matching = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleAdd = (name: string, quantity: number) => {
    const newItem = { id: Date.now(), name: name, quantity: quantity };
    setItems([...items, newItem]);
  };
  const handleClear = () => {
    setItems([]);
  };
  const handleSort = () => {
    setSorted(!sorted);
  };
  const shown = sorted
    ? [...matching].sort((a, b) => a.name.localeCompare(b.name))
    : matching;
  const sortLabel = sorted ? "Original order" : "Sort A-Z";
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <AddItemForm onAdd={handleAdd} />
      <div className="flex gap-3 mt-4">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search the list"
          className="flex-1 rounded-lg border border-slate300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <ul className="mt-6">
        {shown.map((item) => (
          <ItemRow
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </ul>
      <div className="flex items-center justify-between mt-5">
        <p className="text-sm text-slate-500">
          {items.length} items on the list
        </p>
        <button
          onClick={handleSort}
          className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          {sortLabel}
        </button>
        <button
          onClick={handleClear}
          className="text-sm font-semibold text-slate-500
hover:text-slate-800 transition cursor-pointer"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
