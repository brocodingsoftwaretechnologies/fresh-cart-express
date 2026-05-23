import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { cart, useCart } from "@/lib/cart-store";

type Props = {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
};

export function CartDrawer({ open, onClose, onCheckout }: Props) {
  const { items } = useCart();
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-background shadow-float sm:w-[440px]"
          >
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <h3 className="font-display text-lg font-bold">Your cart</h3>
                <p className="text-xs text-muted-foreground">
                  {totalQty} item{totalQty === 1 ? "" : "s"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full bg-muted transition hover:bg-secondary"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-muted">
                  <ShoppingBag className="h-7 w-7 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              </div>
            ) : (
              <ul className="flex-1 space-y-3 overflow-y-auto p-4">
                <AnimatePresence initial={false}>
                  {items.map((i) => (
                    <motion.li
                      key={`${i.productId}-${i.unit}`}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft"
                    >
                      <img
                        src={i.image}
                        alt={i.name}
                        loading="lazy"
                        className="h-16 w-16 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-sm font-semibold leading-tight">{i.name}</div>
                            <div className="text-[11px] text-muted-foreground">{i.unit}</div>
                          </div>
                          <button
                            onClick={() => cart.remove(i.productId, i.unit)}
                            className="text-muted-foreground transition hover:text-destructive"
                            aria-label="Remove"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex h-8 items-center overflow-hidden rounded-lg border border-border">
                            <button
                              onClick={() => cart.dec(i.productId, i.unit)}
                              className="grid h-full w-8 place-items-center hover:bg-muted"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold">{i.qty}</span>
                            <button
                              onClick={() => cart.inc(i.productId, i.unit)}
                              className="grid h-full w-8 place-items-center hover:bg-muted"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-[11px] text-muted-foreground">
                            Qty {i.qty}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}

            <footer className="border-t border-border bg-card p-4">
              <button
                onClick={onCheckout}
                disabled={items.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-success px-5 py-3.5 text-sm font-bold text-success-foreground shadow-soft transition hover:opacity-95 disabled:opacity-40"
              >
                <WhatsappIcon className="h-5 w-5" />
                Proceed to WhatsApp
              </button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                Final pricing confirmed by the shop on WhatsApp
              </p>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 2.06 16.3L1 22l5.84-1.04A10 10 0 1 0 19.05 4.9Zm-7.05 15a8 8 0 0 1-4.07-1.11l-.29-.17-3.46.62.63-3.38-.19-.31a8 8 0 1 1 7.38 4.35Zm4.4-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.5 6.5 0 0 1-1.91-1.18 7.18 7.18 0 0 1-1.32-1.65c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
