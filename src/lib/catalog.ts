import banana from "@/assets/p-banana.jpg";
import apple from "@/assets/p-apple.jpg";
import milk from "@/assets/p-milk.jpg";
import butter from "@/assets/p-butter.jpg";
import rice from "@/assets/p-rice.jpg";
import chips from "@/assets/p-chips.jpg";
import juice from "@/assets/p-juice.jpg";
import bread from "@/assets/p-bread.jpg";
import cookies from "@/assets/p-cookies.jpg";

export type Category = {
  id: string;
  name: string;
  emoji: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "fruits", name: "Fruits", emoji: "🍎", tint: "oklch(0.92 0.09 30)" },
  { id: "dairy", name: "Dairy", emoji: "🥛", tint: "oklch(0.95 0.04 90)" },
  { id: "grocery", name: "Grocery", emoji: "🍚", tint: "oklch(0.93 0.05 70)" },
  { id: "snacks", name: "Snacks", emoji: "🍪", tint: "oklch(0.92 0.08 50)" },
  { id: "beverages", name: "Beverages", emoji: "🧃", tint: "oklch(0.92 0.09 60)" },
  { id: "bakery", name: "Bakery", emoji: "🍞", tint: "oklch(0.95 0.05 80)" },
];

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  units: string[]; // quantity options like "500 g", "1 kg"
  bestseller?: boolean;
  outOfStock?: boolean;
};

export const products: Product[] = [
  { id: "banana", name: "Robusta Bananas", image: banana, category: "fruits", units: ["6 pcs", "12 pcs"], bestseller: true },
  { id: "apple", name: "Royal Red Apples", image: apple, category: "fruits", units: ["4 pcs", "1 kg"] },
  { id: "milk", name: "Farm Fresh Milk", image: milk, category: "dairy", units: ["500 ml", "1 L"], bestseller: true },
  { id: "butter", name: "Creamy Butter", image: butter, category: "dairy", units: ["100 g", "500 g"] },
  { id: "rice", name: "Basmati Rice", image: rice, category: "grocery", units: ["1 kg", "5 kg"], bestseller: true },
  { id: "chips", name: "Crispy Potato Chips", image: chips, category: "snacks", units: ["55 g", "150 g"] },
  { id: "cookies", name: "Choco Chip Cookies", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "juice", name: "Orange Juice", image: juice, category: "beverages", units: ["500 ml", "1 L"] },
  { id: "bread", name: "Soft Milk Bread", image: bread, category: "bakery", units: ["400 g"], outOfStock: true },
];
