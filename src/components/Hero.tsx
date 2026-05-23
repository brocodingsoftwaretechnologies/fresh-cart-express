import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import hero from "@/assets/hero-grocery.jpg";
import { SHOP } from "@/lib/shop-config";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 md:px-6 md:pt-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero shadow-card">
        <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/80">
              <Zap className="h-3.5 w-3.5 text-primary" /> Fast pickup & delivery
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Fresh groceries,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                at your doorstep.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
              {SHOP.tagline}. Pick what you need, send the cart on WhatsApp — we’ll
              handle the rest.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-soft transition hover:opacity-90"
              >
                Start shopping
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-foreground/70">
                <Clock className="h-4 w-4" /> Delivery in ~15 min
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-float">
              <img
                src={hero}
                alt="Fresh vegetables and fruits"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl glass-strong px-4 py-3 shadow-card md:flex md:items-center md:gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Avg. dispatch</div>
                <div className="text-sm font-semibold">15 minutes</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* decorative blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </section>
  );
}
