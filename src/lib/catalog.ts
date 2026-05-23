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
import idliRice from "@/assets/p-idli-rice.jpg";
import urad from "@/assets/p-urad.jpg";
import gingelly from "@/assets/p-gingelly.jpg";
import coconutOil from "@/assets/p-coconut-oil.jpg";
import tamarind from "@/assets/p-tamarind.jpg";
import jaggery from "@/assets/p-jaggery.jpg";
import sambar from "@/assets/p-sambar.jpg";
import rasam from "@/assets/p-rasam.jpg";
import mustard from "@/assets/p-mustard.jpg";
import filterCoffee from "@/assets/p-filter-coffee.jpg";
import appalam from "@/assets/p-appalam.jpg";
import murukku from "@/assets/p-murukku.jpg";
import horlicks from "@/assets/p-horlicks.jpg";
import curryLeaves from "@/assets/p-curryleaves.jpg";
import coconutMilk from "@/assets/p-coconut-milk.jpg";

export type Category = {
  id: string;
  name: string;
  emoji: string;
  tint: string;
};

export const categories: Category[] = [
  { id: "rice-dal", name: "Rice & Dal", emoji: "🍚", tint: "oklch(0.93 0.05 70)" },
  { id: "oils", name: "Oils", emoji: "🫗", tint: "oklch(0.93 0.07 80)" },
  { id: "spices", name: "Spices & Masala", emoji: "🌶️", tint: "oklch(0.92 0.10 40)" },
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
  // Rice & Dal
  { id: "idli-rice", name: "Idli Rice (Parboiled)", image: idliRice, category: "rice-dal", units: ["1 kg", "5 kg", "10 kg", "25 kg"], bestseller: true },
  { id: "ponni-rice", name: "Ponni Boiled Rice", image: rice, category: "rice-dal", units: ["1 kg", "5 kg", "10 kg", "25 kg"], bestseller: true },
  { id: "atta", name: "Whole Wheat Atta Flour", image: atta, category: "rice-dal", units: ["1 kg", "5 kg", "10 kg"] },
  { id: "toor-dal", name: "Toor Dal (Thuvaram Paruppu)", image: dal, category: "rice-dal", units: ["500 g", "1 kg", "2 kg"], bestseller: true },
  { id: "urad-dal", name: "Urad Dal (Ulutham Paruppu)", image: urad, category: "rice-dal", units: ["500 g", "1 kg", "2 kg"] },
  { id: "sugar", name: "Sugar", image: sugar, category: "rice-dal", units: ["500 g", "1 kg", "5 kg"] },
  { id: "jaggery", name: "Country Jaggery (Vellam)", image: jaggery, category: "rice-dal", units: ["250 g", "500 g", "1 kg"] },
  { id: "salt", name: "Iodised Salt (Uppu)", image: salt, category: "rice-dal", units: ["500 g", "1 kg"] },

  // Oils
  { id: "gingelly", name: "Cold-Pressed Gingelly Oil (Nallennai)", image: gingelly, category: "oils", units: ["500 ml", "1 L", "2 L"], bestseller: true },
  { id: "coconut-oil", name: "Virgin Coconut Oil", image: coconutOil, category: "oils", units: ["200 ml", "500 ml", "1 L"] },
  { id: "sunflower-oil", name: "Refined Sunflower Oil", image: oil, category: "oils", units: ["500 ml", "1 L", "5 L"], bestseller: true },

  // Spices & Masala
  { id: "turmeric", name: "Turmeric Powder (Manjal)", image: turmeric, category: "spices", units: ["100 g", "200 g", "500 g"] },
  { id: "chilli", name: "Red Chilli Powder (Milagai)", image: chilli, category: "spices", units: ["100 g", "200 g", "500 g"], bestseller: true },
  { id: "mustard", name: "Mustard Seeds (Kadugu)", image: mustard, category: "spices", units: ["100 g", "200 g", "500 g"] },
  { id: "sambar-powder", name: "Sambar Powder", image: sambar, category: "spices", units: ["100 g", "200 g", "500 g"], bestseller: true },
  { id: "rasam-powder", name: "Rasam Powder", image: rasam, category: "spices", units: ["100 g", "200 g", "500 g"] },
  { id: "tamarind", name: "Seedless Tamarind (Puli)", image: tamarind, category: "spices", units: ["200 g", "500 g", "1 kg"] },
  { id: "curry-leaves", name: "Dried Curry Leaves (Karuveppilai)", image: curryLeaves, category: "spices", units: ["25 g", "50 g", "100 g"] },

  // Snacks
  { id: "appalam", name: "Appalam (Papad)", image: appalam, category: "snacks", units: ["100 g", "200 g", "500 g"], bestseller: true },
  { id: "murukku", name: "Murukku (Crispy Spirals)", image: murukku, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "mixture", name: "Madras Mixture", image: namkeen, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "chips", name: "Potato Chips", image: chips, category: "snacks", units: ["52 g", "90 g", "165 g"] },
  { id: "cookies", name: "Choco Chip Cookies", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "noodles", name: "Instant Masala Noodles", image: noodles, category: "snacks", units: ["1 pack", "4 pack", "8 pack"] },

  // Beverages
  { id: "filter-coffee", name: "Filter Coffee Powder", image: filterCoffee, category: "beverages", units: ["100 g", "250 g", "500 g", "1 kg"], bestseller: true },
  { id: "tea", name: "Tea Powder (Chai Patti)", image: tea, category: "beverages", units: ["100 g", "250 g", "500 g", "1 kg"], bestseller: true },
  { id: "instant-coffee", name: "Instant Coffee", image: coffee, category: "beverages", units: ["25 g", "50 g", "100 g", "200 g"] },
  { id: "horlicks", name: "Malt Health Drink", image: horlicks, category: "beverages", units: ["200 g", "500 g", "1 kg"] },
  { id: "coconut-milk", name: "Coconut Milk Powder", image: coconutMilk, category: "beverages", units: ["50 g", "100 g", "200 g"] },
  { id: "fruit-juice", name: "Tetra Pack Fruit Juice", image: juice, category: "beverages", units: ["200 ml", "1 L"] },
  { id: "cola", name: "Cola Soft Drink", image: cola, category: "beverages", units: ["300 ml", "750 ml", "1.25 L", "2 L"] },
  { id: "water", name: "Packaged Drinking Water", image: water, category: "beverages", units: ["500 ml", "1 L", "2 L"] },
  { id: "ketchup", name: "Tomato Ketchup", image: ketchup, category: "beverages", units: ["200 g", "500 g", "1 kg"] },

  // Personal Care
  { id: "soap", name: "Sandalwood Bath Soap", image: soap, category: "personal", units: ["75 g", "125 g", "Pack of 3"] },
  { id: "toothpaste", name: "Toothpaste", image: toothpaste, category: "personal", units: ["50 g", "100 g", "200 g"] },
  { id: "shampoo", name: "Shampoo", image: shampoo, category: "personal", units: ["Sachet", "175 ml", "340 ml"] },

  // Household
  { id: "detergent", name: "Laundry Detergent Powder", image: detergent, category: "household", units: ["500 g", "1 kg", "2 kg"], bestseller: true },
  { id: "dishwash", name: "Dishwash Bar", image: dishwash, category: "household", units: ["1 bar", "Pack of 3", "Pack of 5"] },
  { id: "agarbatti", name: "Agarbatti Incense Sticks", image: agarbatti, category: "household", units: ["Small", "Medium", "Family Pack"] },
];
