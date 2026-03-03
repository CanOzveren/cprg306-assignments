interface ItemProps {
  name: string;
  quantity: number;
  category: string;
  onSelect: () => void;
}

export default function Item({
  name,
  quantity,
  category,
  onSelect,
}: ItemProps) {
  return (
    <li
      onClick={onSelect}
      className="bg-slate-800 p-3 rounded cursor-pointer hover:bg-slate-700 transition"
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
