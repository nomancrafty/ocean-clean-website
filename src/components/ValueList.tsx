import { Icon } from "./icons";
import type { IconKey } from "./icons";

export function ValueList({ items }: { items: { icon: IconKey; title: string; body: string }[] }) {
  return (
    <ul className="grid gap-4 mt-2">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4 items-start">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] bg-amber-500/15">
            <Icon name={item.icon} className="h-[22px] w-[22px] text-amber-400" />
          </span>
          <div>
            <h4 className="text-white text-[1.08rem] mb-0.5">{item.title}</h4>
            <p className="text-steel-300 text-[0.95rem]">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
