import rice from "@/assets/p-rice.jpg";
import chips from "@/assets/p-chips.jpg";
import juice from "@/assets/p-juice.jpg";
import cookies from "@/assets/p-cookies.jpg";

export type Category = {
  id: string;
  name: string;
  emoji: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "grocery", name: "Grocery", emoji: "🍚", tint: "oklch(0.93 0.05 70)" },
  { id: "snacks", name: "Snacks", emoji: "🍪", tint: "oklch(0.92 0.08 50)" },
  { id: "beverages", name: "Beverages", emoji: "🧃", tint: "oklch(0.92 0.09 60)" },
];

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  units: string[];
  bestseller?: boolean;
  outOfStock?: boolean;
};

export const products: Product[] = [
  { id: "rice", name: "Basmati Rice", image: rice, category: "grocery", units: ["1 kg", "5 kg"], bestseller: true },
  { id: "chips", name: "Crispy Potato Chips", image: chips, category: "snacks", units: ["55 g", "150 g"] },
  { id: "cookies", name: "Choco Chip Cookies", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "juice", name: "Orange Juice", image: juice, category: "beverages", units: ["500 ml", "1 L"] },
];

