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
  { id: "rice", name: "India Gate Basmati Chawal", image: rice, category: "grocery", units: ["1 kg", "5 kg", "10 kg"], bestseller: true },
  { id: "atta", name: "Aashirvaad Whole Wheat Atta", image: atta, category: "grocery", units: ["1 kg", "5 kg", "10 kg"], bestseller: true },
  { id: "dal", name: "Tata Sampann Toor Dal", image: dal, category: "grocery", units: ["500 g", "1 kg", "2 kg"] },
  { id: "oil", name: "Fortune Sunlite Refined Oil", image: oil, category: "grocery", units: ["500 ml", "1 L", "5 L"], bestseller: true },
  { id: "sugar", name: "Madhur Pure Cheeni (Sugar)", image: sugar, category: "grocery", units: ["500 g", "1 kg", "5 kg"] },
  { id: "salt", name: "Tata Iodised Namak", image: salt, category: "grocery", units: ["500 g", "1 kg"] },

  // Spices
  { id: "turmeric", name: "MDH Haldi Powder", image: turmeric, category: "spices", units: ["100 g", "200 g", "500 g"] },
  { id: "chilli", name: "Everest Lal Mirch Powder", image: chilli, category: "spices", units: ["100 g", "200 g", "500 g"], bestseller: true },

  // Snacks
  { id: "chips", name: "Lay's Magic Masala Chips", image: chips, category: "snacks", units: ["52 g", "90 g", "165 g"] },
  { id: "cookies", name: "Parle Hide & Seek Choco Chip", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "namkeen", name: "Haldiram's Bhujia Namkeen", image: namkeen, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "noodles", name: "Maggi 2-Minute Masala Noodles", image: noodles, category: "snacks", units: ["1 pack", "4 pack", "8 pack"], bestseller: true },

  // Beverages
  { id: "juice", name: "Real Orange Fruit Juice", image: juice, category: "beverages", units: ["200 ml", "1 L"] },
  { id: "cola", name: "Thums Up Cola", image: cola, category: "beverages", units: ["300 ml", "750 ml", "1.25 L", "2 L"] },
  { id: "water", name: "Bisleri Mineral Water", image: water, category: "beverages", units: ["500 ml", "1 L", "2 L"] },
  { id: "tea", name: "Tata Tea Premium Chai Patti", image: tea, category: "beverages", units: ["100 g", "250 g", "500 g", "1 kg"], bestseller: true },
  { id: "coffee", name: "Nescafé Classic Instant Coffee", image: coffee, category: "beverages", units: ["25 g", "50 g", "100 g", "200 g"] },
  { id: "ketchup", name: "Kissan Fresh Tomato Ketchup", image: ketchup, category: "beverages", units: ["200 g", "500 g", "1 kg"] },

  // Personal Care
  { id: "soap", name: "Bath Soap", image: soap, category: "personal", units: ["75 g", "125 g", "Pack of 3"] },
  { id: "toothpaste", name: "Toothpaste", image: toothpaste, category: "personal", units: ["50 g", "100 g", "200 g"] },
  { id: "shampoo", name: "Shampoo", image: shampoo, category: "personal", units: ["Sachet", "180 ml", "340 ml"] },

  // Household
  { id: "detergent", name: "Laundry Detergent Powder", image: detergent, category: "household", units: ["500 g", "1 kg", "2 kg"], bestseller: true },
  { id: "dishwash", name: "Dishwash Bar", image: dishwash, category: "household", units: ["1 bar", "Pack of 3"] },
  { id: "agarbatti", name: "Agarbatti Sticks", image: agarbatti, category: "household", units: ["Small", "Medium", "Family"] },
];
