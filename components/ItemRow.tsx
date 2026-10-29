interface ItemRowProps {
  name: string;
  quantity: number;
  onRemove: () => void;
}

const ItemRow = ({ name, quantity, onRemove }: ItemRowProps) => {
  return (
    <li className="flex items-center justify-between border-b border-slate-200 py-3">
      <div>
        <span className="font-medium text-slate-900">{name}</span>
        <span className="text-sm text-slate-500 ml-2">x {quantity}</span>
      </div>
      <button
        onClick={onRemove}
        className=" text-sm font-semibold text-rose-600 hover:text-rose-800 transition cursor-pointer"
      >
        Remove
      </button>
    </li>
  );
};

export default ItemRow;
