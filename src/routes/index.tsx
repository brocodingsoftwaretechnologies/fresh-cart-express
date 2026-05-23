import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { CategoryStrip } from "@/components/CategoryStrip";
import { ProductGrid } from "@/components/ProductGrid";
import { FloatingCart } from "@/components/FloatingCart";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { OrderSuccess } from "@/components/OrderSuccess";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FreshCart — Fresh groceries, delivered fast" },
      {
        name: "description",
        content:
          "Order vegetables, fruits, dairy and daily groceries from your neighborhood shop on WhatsApp. Fast pickup and delivery, fresh stock daily.",
      },
      { property: "og:title", content: "FreshCart — Fresh groceries, delivered fast" },
      {
        property: "og:description",
        content: "Pick groceries, order on WhatsApp, get them delivered fresh.",
      },
    ],
  }),
});

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderToken, setOrderToken] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        query={query}
        onQuery={setQuery}
        activeCategory={category}
        onCategory={setCategory}
      />
      <main>
        <Hero />
        <CategoryStrip active={category} onSelect={setCategory} />
        <ProductGrid query={query} activeCategory={category} />
      </main>
      <SiteFooter />

      <FloatingCart onOpen={() => setCartOpen(true)} />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />
      <CheckoutDialog
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onPlaced={(token) => {
          setCheckoutOpen(false);
          setOrderToken(token);
        }}
      />
      <OrderSuccess token={orderToken} onClose={() => setOrderToken(null)} />
    </div>
  );
}
