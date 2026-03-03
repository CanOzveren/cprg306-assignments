type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="rounded-lg bg-zinc-900/70 p-4 shadow">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-zinc-300">
        Buy: <span className="font-medium text-white">{quantity}</span>
      </div>
      <div className="text-sm text-zinc-300">
        Category:{" "}
        <span className="rounded bg-zinc-800 px-2 py-0.5 text-white capitalize">
          {category}
        </span>
      </div>
    </li>
  );
}

