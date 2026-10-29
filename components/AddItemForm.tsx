"use client";
import { useState } from "react";

interface AddItemsProps {
  onAdd: (name: string, quantity: number) => void;
}

const AddItemForm = ({ onAdd }: AddItemsProps) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    if (name === "") {
      return;
    }
    onAdd(name, Number(quantity));
    setName("");
    setQuantity("1");
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Item Name"
        className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
      />
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-20 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={handleClick}
        className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default AddItemForm;
