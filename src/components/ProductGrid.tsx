import { useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { categories, products } from "@/lib/catalog";

type Props = {
  query: string;
  activeCategory: string;
};

export function ProductGrid({ query, activeCategory }: Props) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchQ = !q || p.name.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCategory]);

  // group by category if showing all
  const grouped = useMemo(() => {
    if (activeCategory !== "all" || query.trim()) return null;
    return categories
      .map((c) => ({ cat: c, items: filtered.filter((p) => p.category === c.id) }))
      .filter((g) => g.items.length > 0);
  }, [filtered, activeCategory, query]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 pb-28 md:px-6">
      {grouped ? (
        grouped.map((g) => (
          <div key={g.cat.id} className="mb-10">
            <h3 className="mb-4 font-display text-xl font-bold md:text-2xl">
              <span className="mr-2">{g.cat.emoji}</span>
              {g.cat.name}
            </h3>
            <Grid>
              {g.items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </Grid>
          </div>
        ))
      ) : (
        <>
          <h3 className="mb-4 font-display text-xl font-bold md:text-2xl">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </h3>
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center text-muted-foreground">
              No items match your search.
            </div>
          ) : (
            <Grid>
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </Grid>
          )}
        </>
      )}
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
      {children}
    </div>
  );
}
