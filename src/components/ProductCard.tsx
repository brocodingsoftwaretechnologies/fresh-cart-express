import { motion } from "framer-motion";
import { Minus, Plus, Star } from "lucide-react";
import { useState } from "react";
import { cart, useCart } from "@/lib/cart-store";
import type { Product } from "@/lib/catalog";

const CUSTOM = "__custom__";
const WEIGHT_UNITS = ["g", "kg", "ml", "L", "pcs"] as const;

export function ProductCard({ product }: { product: Product }) {
  const [unit, setUnit] = useState(product.units[0]);
  const [customAmt, setCustomAmt] = useState<string>("250");
  const [customUnit, setCustomUnit] = useState<string>("g");
  const isCustom = unit === CUSTOM;
  const activeUnit = isCustom ? `${customAmt || 0} ${customUnit}` : unit;
  const state = useCart();
  const qty = state.items.find((i) => i.productId === product.id && i.unit === activeUnit)?.qty ?? 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-soft transition hover:shadow-card"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <img
          src={product.image}
          alt={product.name}
          width={512}
          height={512}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.bestseller && !product.outOfStock && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-accent-foreground shadow-soft">
            <Star className="h-3 w-3 fill-current" /> Bestseller
          </span>
        )}
        {product.outOfStock && (
          <div className="absolute inset-0 grid place-items-center bg-background/70 backdrop-blur-sm">
            <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
              Out of stock
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{product.name}</h3>
        <p className="mt-0.5 text-[11px] text-muted-foreground">Delivery in 15 min</p>

        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2">
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              disabled={product.outOfStock}
              className="h-9 flex-1 rounded-xl border border-border bg-background px-2 text-xs font-medium outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
            >
              {product.units.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
              <option value={CUSTOM}>✏️ Custom weight</option>
            </select>

            {qty === 0 ? (
              <motion.button
                whileTap={{ scale: 0.92 }}
                disabled={product.outOfStock || (isCustom && !Number(customAmt))}
                onClick={() => cart.add(product, activeUnit)}
                className="h-9 rounded-xl bg-gradient-primary px-4 text-xs font-bold text-primary-foreground shadow-soft transition hover:opacity-95 disabled:opacity-40"
              >
                ADD
              </motion.button>
            ) : (
              <div className="flex h-9 items-center overflow-hidden rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <button
                  onClick={() => cart.dec(product.id, activeUnit)}
                  className="grid h-full w-9 place-items-center transition hover:bg-black/10"
                  aria-label="Decrease"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <input
                  type="number"
                  min={1}
                  max={999}
                  value={qty}
                  onChange={(e) => {
                    const v = Math.max(0, Math.min(999, parseInt(e.target.value || "0", 10) || 0));
                    cart.setQty(product, activeUnit, v);
                  }}
                  className="w-10 bg-transparent text-center text-xs font-bold outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  aria-label="Quantity"
                />
                <button
                  onClick={() => cart.inc(product.id, activeUnit)}
                  className="grid h-full w-9 place-items-center transition hover:bg-black/10"
                  aria-label="Increase"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>

          {isCustom && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-1.5"
            >
              <input
                type="number"
                min={1}
                max={99999}
                value={customAmt}
                onChange={(e) => setCustomAmt(e.target.value.replace(/[^0-9.]/g, ""))}
                placeholder="Amount"
                className="h-8 w-full flex-1 rounded-lg border border-border bg-background px-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select
                value={customUnit}
                onChange={(e) => setCustomUnit(e.target.value)}
                className="h-8 rounded-lg border border-border bg-background px-2 text-xs font-semibold outline-none focus:ring-2 focus:ring-primary/30"
              >
                {WEIGHT_UNITS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
