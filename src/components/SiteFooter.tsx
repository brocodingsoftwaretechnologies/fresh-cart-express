import { Clock, Instagram, MapPin, Phone, Facebook, Leaf } from "lucide-react";
import { SHOP } from "@/lib/shop-config";
import { WhatsappIcon } from "./CartDrawer";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-bold">{SHOP.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{SHOP.tagline}.</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Visit us
          </h4>
          <p className="mt-3 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>{SHOP.address}</span>
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Reach us
          </h4>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-primary" /> {SHOP.phone}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" /> {SHOP.hours}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Follow
          </h4>
          <div className="mt-3 flex gap-2">
            <a
              href={`https://wa.me/${SHOP.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl bg-success text-success-foreground shadow-soft transition hover:opacity-90"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background shadow-soft transition hover:opacity-90"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background shadow-soft transition hover:opacity-90"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SHOP.name}. Made with 💚 for your kitchen.
      </div>
    </footer>
  );
}
