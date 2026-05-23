import { useSyncExternalStore } from "react";
import type { Product } from "./catalog";

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  unit: string;
  qty: number;
};

type State = { items: CartItem[] };

let state: State = { items: [] };
const listeners = new Set<() => void>();

const STORAGE_KEY = "freshcart_cart_v1";

if (typeof window !== "undefined") {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = { items: JSON.parse(raw) };
  } catch {}
}

function persist() {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {}
  }
}

function emit() {
  persist();
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return { items: [] as CartItem[] };
}

export function useCart() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function key(productId: string, unit: string) {
  return `${productId}__${unit}`;
}

export const cart = {
  add(product: Product, unit: string) {
    const k = key(product.id, unit);
    const existing = state.items.find((i) => key(i.productId, i.unit) === k);
    if (existing) {
      state = { items: state.items.map((i) => (key(i.productId, i.unit) === k ? { ...i, qty: i.qty + 1 } : i)) };
    } else {
      state = {
        items: [
          ...state.items,
          { productId: product.id, name: product.name, image: product.image, unit, qty: 1 },
        ],
      };
    }
    emit();
  },
  inc(productId: string, unit: string) {
    const k = key(productId, unit);
    state = { items: state.items.map((i) => (key(i.productId, i.unit) === k ? { ...i, qty: i.qty + 1 } : i)) };
    emit();
  },
  dec(productId: string, unit: string) {
    const k = key(productId, unit);
    state = {
      items: state.items
        .map((i) => (key(i.productId, i.unit) === k ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    };
    emit();
  },
  remove(productId: string, unit: string) {
    const k = key(productId, unit);
    state = { items: state.items.filter((i) => key(i.productId, i.unit) !== k) };
    emit();
  },
  clear() {
    state = { items: [] };
    emit();
  },
  getQty(productId: string, unit: string) {
    const k = key(productId, unit);
    return state.items.find((i) => key(i.productId, i.unit) === k)?.qty ?? 0;
  },
  totalCount() {
    return state.items.reduce((s, i) => s + i.qty, 0);
  },
};
