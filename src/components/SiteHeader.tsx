import { motion } from "framer-motion";
import { Leaf, Search } from "lucide-react";
import { SHOP } from "@/lib/shop-config";
import { categories } from "@/lib/catalog";

type Props = {
  query: string;
  onQuery: (v: string) => void;
  activeCategory: string;
  onCategory: (id: string) => void;
};

export function SiteHeader({ query, onQuery, activeCategory, onCategory }: Props) {
  return (
    <header className="sticky top-0 z-40">
      <div className="glass-strong">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
          <motion.a
            href="/"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary shadow-soft">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-lg font-bold">{SHOP.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                in 15 min
              </span>
            </span>
          </motion.a>

          <div className="relative ml-auto flex-1 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search for tomatoes, milk, rice…"
              className="h-11 w-full rounded-full border border-border bg-card/80 pl-11 pr-4 text-sm outline-none ring-primary/30 transition focus:ring-2"
            />
          </div>
        </div>

        <nav className="mx-auto max-w-7xl px-4 pb-3 md:px-6">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            <CategoryPill active={activeCategory === "all"} onClick={() => onCategory("all")}>
              All
            </CategoryPill>
            {categories.map((c) => (
              <CategoryPill
                key={c.id}
                active={activeCategory === c.id}
                onClick={() => onCategory(c.id)}
              >
                <span className="mr-1">{c.emoji}</span>
                {c.name}
              </CategoryPill>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function CategoryPill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-foreground text-background"
          : "bg-card text-foreground/70 hover:text-foreground border border-border"
      }`}
    >
      {children}
    </button>
  );
}
