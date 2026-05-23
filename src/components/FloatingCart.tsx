import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function FloatingCart({ onOpen }: { onOpen: () => void }) {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  if (count === 0) return null;

  return (
    <motion.button
      onClick={onOpen}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-background shadow-float md:bottom-8 md:right-8"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-background/15">
        <ShoppingBag className="h-5 w-5" />
        <motion.span
          key={count}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground"
        >
          {count}
        </motion.span>
      </span>
      <span className="text-sm font-semibold">View cart</span>
    </motion.button>
  );
}
