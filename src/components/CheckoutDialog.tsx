import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { WhatsappIcon } from "./CartDrawer";
import { cart, useCart } from "@/lib/cart-store";
import { SHOP } from "@/lib/shop-config";

type Props = {
  open: boolean;
  onClose: () => void;
  onPlaced: (token: string) => void;
};

export function CheckoutDialog({ open, onClose, onPlaced }: Props) {
  const { items } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const token = generateToken();
    const lines = items.map((i, idx) => `${idx + 1}. ${i.name} (${i.unit}) - ${i.qty} Qty`);
    const msg = [
      "Hello,",
      "",
      `I want to order from ${SHOP.name}:`,
      "",
      ...lines,
      "",
      `Customer Name: ${name}`,
      `Phone Number: ${phone}`,
      `Address: ${address}`,
      "",
      `Order Token: #${token}`,
      "",
      "Please confirm my order.",
    ].join("\n");

    const url = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onPlaced(token);
    cart.clear();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-3xl glass-strong p-6 shadow-float sm:left-1/2 sm:bottom-auto sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">Almost there</h3>
                <p className="text-xs text-muted-foreground">
                  Share details to send your order on WhatsApp
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full bg-muted hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={placeOrder} className="space-y-3">
              <Field label="Your name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="input"
                />
              </Field>
              <Field label="Phone number">
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\s-]{7,}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="input"
                />
              </Field>
              <Field label="Delivery address">
                <textarea
                  required
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House / flat, street, area, landmark"
                  className="input resize-none"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-success px-5 py-3.5 text-sm font-bold text-success-foreground shadow-soft transition hover:opacity-95"
              >
                <WhatsappIcon className="h-5 w-5" />
                Send order on WhatsApp
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                You'll be redirected to WhatsApp to confirm with the shop
              </p>
            </form>

            <style>{`
              .input {
                width: 100%;
                border-radius: 0.85rem;
                border: 1px solid var(--color-border);
                background: var(--color-card);
                padding: 0.6rem 0.85rem;
                font-size: 0.875rem;
                outline: none;
              }
              .input:focus {
                box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent);
              }
            `}</style>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function generateToken() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `FC-${n}`;
}
