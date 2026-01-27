interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="flex justify-between rounded-lg bg-zinc-800 p-3">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-zinc-400">{category}</p>
      </div>
      <span className="font-bold">{quantity}</span>
    </li>
  );
}
