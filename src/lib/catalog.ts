import rice from "@/assets/p-rice.jpg";
import chips from "@/assets/p-chips.jpg";
import juice from "@/assets/p-juice.jpg";
import cookies from "@/assets/p-cookies.jpg";
import dal from "@/assets/p-dal.jpg";
import oil from "@/assets/p-oil.jpg";
import atta from "@/assets/p-atta.jpg";
import sugar from "@/assets/p-sugar.jpg";
import salt from "@/assets/p-salt.jpg";
import turmeric from "@/assets/p-turmeric.jpg";
import chilli from "@/assets/p-chilli.jpg";
import tea from "@/assets/p-tea.jpg";
import coffee from "@/assets/p-coffee.jpg";
import noodles from "@/assets/p-noodles.jpg";
import ketchup from "@/assets/p-ketchup.jpg";
import soap from "@/assets/p-soap.jpg";
import toothpaste from "@/assets/p-toothpaste.jpg";
import shampoo from "@/assets/p-shampoo.jpg";
import detergent from "@/assets/p-detergent.jpg";
import dishwash from "@/assets/p-dishwash.jpg";
import agarbatti from "@/assets/p-agarbatti.jpg";
import cola from "@/assets/p-cola.jpg";
import water from "@/assets/p-water.jpg";
import namkeen from "@/assets/p-namkeen.jpg";

export type Category = {
  id: string;
  name: string;
  emoji: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "grocery", name: "Grocery", emoji: "🍚", tint: "oklch(0.93 0.05 70)" },
  { id: "spices", name: "Spices", emoji: "🌶️", tint: "oklch(0.92 0.10 40)" },
  { id: "snacks", name: "Snacks", emoji: "🍪", tint: "oklch(0.92 0.08 50)" },
  { id: "beverages", name: "Beverages", emoji: "🧃", tint: "oklch(0.92 0.09 60)" },
  { id: "personal", name: "Personal Care", emoji: "🧴", tint: "oklch(0.92 0.06 200)" },
  { id: "household", name: "Household", emoji: "🧺", tint: "oklch(0.92 0.05 250)" },
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
  // Grocery
  { id: "rice", name: "Basmati Rice", image: rice, category: "grocery", units: ["1 kg", "5 kg", "10 kg"], bestseller: true },
  { id: "atta", name: "Wheat Atta Flour", image: atta, category: "grocery", units: ["1 kg", "5 kg", "10 kg"], bestseller: true },
  { id: "dal", name: "Toor Dal", image: dal, category: "grocery", units: ["500 g", "1 kg", "2 kg"] },
  { id: "oil", name: "Sunflower Oil", image: oil, category: "grocery", units: ["500 ml", "1 L", "5 L"], bestseller: true },
  { id: "sugar", name: "Sugar", image: sugar, category: "grocery", units: ["500 g", "1 kg", "5 kg"] },
  { id: "salt", name: "Iodised Salt", image: salt, category: "grocery", units: ["500 g", "1 kg"] },

  // Spices
  { id: "turmeric", name: "Turmeric Powder", image: turmeric, category: "spices", units: ["100 g", "200 g", "500 g"] },
  { id: "chilli", name: "Red Chilli Powder", image: chilli, category: "spices", units: ["100 g", "200 g", "500 g"], bestseller: true },

  // Snacks
  { id: "chips", name: "Crispy Potato Chips", image: chips, category: "snacks", units: ["55 g", "150 g"] },
  { id: "cookies", name: "Choco Chip Cookies", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "namkeen", name: "Mixture Namkeen", image: namkeen, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "noodles", name: "Instant Noodles", image: noodles, category: "snacks", units: ["1 pack", "4 pack", "8 pack"], bestseller: true },

  // Beverages
  { id: "juice", name: "Orange Juice", image: juice, category: "beverages", units: ["500 ml", "1 L"] },
  { id: "cola", name: "Cola Soft Drink", image: cola, category: "beverages", units: ["300 ml", "750 ml", "1.25 L", "2 L"] },
  { id: "water", name: "Mineral Water", image: water, category: "beverages", units: ["500 ml", "1 L", "2 L"] },
  { id: "tea", name: "Premium Tea Leaves", image: tea, category: "beverages", units: ["100 g", "250 g", "500 g"], bestseller: true },
  { id: "coffee", name: "Instant Coffee", image: coffee, category: "beverages", units: ["50 g", "100 g", "200 g"] },
  { id: "ketchup", name: "Tomato Ketchup", image: ketchup, category: "beverages", units: ["200 g", "500 g", "1 kg"] },

  // Personal Care
  { id: "soap", name: "Bath Soap", image: soap, category: "personal", units: ["75 g", "125 g", "Pack of 3"] },
  { id: "toothpaste", name: "Toothpaste", image: toothpaste, category: "personal", units: ["50 g", "100 g", "200 g"] },
  { id: "shampoo", name: "Shampoo", image: shampoo, category: "personal", units: ["Sachet", "180 ml", "340 ml"] },

  // Household
  { id: "detergent", name: "Laundry Detergent Powder", image: detergent, category: "household", units: ["500 g", "1 kg", "2 kg"], bestseller: true },
  { id: "dishwash", name: "Dishwash Bar", image: dishwash, category: "household", units: ["1 bar", "Pack of 3"] },
  { id: "agarbatti", name: "Agarbatti Sticks", image: agarbatti, category: "household", units: ["Small", "Medium", "Family"] },
];
