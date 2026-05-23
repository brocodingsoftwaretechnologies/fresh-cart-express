import { motion } from "framer-motion";
import { categories } from "@/lib/catalog";

type Props = {
  active: string;
  onSelect: (id: string) => void;
};

export function CategoryStrip({ active, onSelect }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Shop by category</h2>
          <p className="text-sm text-muted-foreground">Pick a section to jump in</p>
        </div>
      </div>

      <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 md:mx-0 md:px-0">
        {categories.map((c, i) => {
          const isActive = active === c.id;
          return (
            <motion.button
              key={c.id}
              onClick={() => onSelect(isActive ? "all" : c.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative shrink-0 overflow-hidden rounded-3xl border bg-card p-4 text-left shadow-soft transition w-[120px] md:w-[140px] ${
                isActive ? "border-primary ring-2 ring-primary/30" : "border-border"
              }`}
            >
              <div
                className="mb-3 grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-soft md:h-20 md:w-20 md:text-4xl"
                style={{ background: c.tint }}
              >
                {c.emoji}
              </div>
              <div className="text-sm font-semibold">{c.name}</div>
              <div className="text-[11px] text-muted-foreground">Fresh stock</div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
