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
  { id: "rice-grains", name: "Rice & Grains", emoji: "🍚", tint: "oklch(0.93 0.05 70)" },
  { id: "dals", name: "Dals & Pulses", emoji: "🫘", tint: "oklch(0.92 0.06 90)" },
  { id: "oils", name: "Oils & Ghee", emoji: "🫗", tint: "oklch(0.93 0.07 80)" },
  { id: "spices", name: "Whole Spices", emoji: "🌶️", tint: "oklch(0.92 0.10 40)" },
  { id: "masala", name: "Masala Powders", emoji: "🧂", tint: "oklch(0.92 0.09 35)" },
  { id: "salt-sweet", name: "Salt & Sweeteners", emoji: "🍯", tint: "oklch(0.94 0.06 90)" },
  { id: "pickles", name: "Pickles & Mixes", emoji: "🥭", tint: "oklch(0.92 0.10 60)" },
  { id: "snacks", name: "Snacks", emoji: "🍪", tint: "oklch(0.92 0.08 50)" },
  { id: "beverages", name: "Beverages", emoji: "🧃", tint: "oklch(0.92 0.09 60)" },
  { id: "noodles", name: "Noodles & Pasta", emoji: "🍜", tint: "oklch(0.92 0.08 45)" },
  { id: "cleaning", name: "Cleaning", emoji: "🧽", tint: "oklch(0.92 0.05 220)" },
  { id: "personal", name: "Personal Care", emoji: "🧴", tint: "oklch(0.92 0.06 200)" },
  { id: "baby", name: "Baby Care", emoji: "🍼", tint: "oklch(0.94 0.05 320)" },
  { id: "pooja", name: "Pooja Items", emoji: "🪔", tint: "oklch(0.93 0.07 55)" },
  { id: "household", name: "Household", emoji: "🧺", tint: "oklch(0.92 0.05 250)" },
  { id: "tamil-special", name: "Tamil Specials", emoji: "🌿", tint: "oklch(0.92 0.07 140)" },
];

export type Product = {
  id: string;
  name: string;
  tamil?: string;
  image: string;
  category: string;
  units: string[];
  bestseller?: boolean;
  outOfStock?: boolean;
};

const GRAIN_UNITS = ["1 kg", "5 kg", "10 kg", "25 kg"];
const FLOUR_UNITS = ["500 g", "1 kg", "5 kg"];
const DAL_UNITS = ["500 g", "1 kg", "2 kg"];
const OIL_UNITS = ["500 ml", "1 L", "5 L"];
const SPICE_UNITS = ["100 g", "200 g", "500 g"];
const SMALL_UNITS = ["100 g", "250 g", "500 g"];

export const products: Product[] = [
  // Rice & Grains
  { id: "ponni-rice", name: "Ponni Rice", tamil: "பொன்னி அரிசி", image: rice, category: "rice-grains", units: GRAIN_UNITS, bestseller: true },
  { id: "idly-rice", name: "Idly Rice", tamil: "இட்லி அரிசி", image: idliRice, category: "rice-grains", units: GRAIN_UNITS, bestseller: true },
  { id: "basmati-rice", name: "Basmati Rice", tamil: "பாஸ்மதி அரிசி", image: rice, category: "rice-grains", units: GRAIN_UNITS },
  { id: "raw-rice", name: "Raw Rice", tamil: "பச்சரிசி", image: rice, category: "rice-grains", units: GRAIN_UNITS },
  { id: "boiled-rice", name: "Boiled Rice", tamil: "புழுங்கல் அரிசி", image: rice, category: "rice-grains", units: GRAIN_UNITS },
  { id: "wheat", name: "Wheat", tamil: "கோதுமை", image: atta, category: "rice-grains", units: GRAIN_UNITS },
  { id: "ragi", name: "Ragi", tamil: "கேழ்வரகு", image: atta, category: "rice-grains", units: FLOUR_UNITS },
  { id: "thinai", name: "Thinai (Foxtail Millet)", tamil: "தினை", image: rice, category: "rice-grains", units: FLOUR_UNITS },
  { id: "kambu", name: "Kambu (Pearl Millet)", tamil: "கம்பு", image: rice, category: "rice-grains", units: FLOUR_UNITS },
  { id: "cholam", name: "Cholam (Sorghum)", tamil: "சோளம்", image: rice, category: "rice-grains", units: FLOUR_UNITS },
  { id: "varagu", name: "Varagu (Kodo Millet)", tamil: "வரகு", image: rice, category: "rice-grains", units: FLOUR_UNITS },
  { id: "samai", name: "Samai (Little Millet)", tamil: "சாமை", image: rice, category: "rice-grains", units: FLOUR_UNITS },
  { id: "aval", name: "Aval (Poha)", tamil: "அவல்", image: atta, category: "rice-grains", units: SMALL_UNITS },
  { id: "puffed-rice", name: "Puffed Rice", tamil: "பொரி", image: atta, category: "rice-grains", units: SMALL_UNITS },
  { id: "atta", name: "Atta Flour", tamil: "ஆட்டா மாவு", image: atta, category: "rice-grains", units: FLOUR_UNITS },
  { id: "maida", name: "Maida Flour", tamil: "மைதா மாவு", image: atta, category: "rice-grains", units: FLOUR_UNITS },
  { id: "rava", name: "Rava (Sooji)", tamil: "ரவை", image: atta, category: "rice-grains", units: FLOUR_UNITS },
  { id: "semiya", name: "Semiya (Vermicelli)", tamil: "சேமியா", image: noodles, category: "rice-grains", units: SMALL_UNITS },
  { id: "rice-flour", name: "Rice Flour", tamil: "அரிசி மாவு", image: atta, category: "rice-grains", units: FLOUR_UNITS },
  { id: "besan-flour", name: "Besan Flour", tamil: "கடலை மாவு", image: atta, category: "rice-grains", units: FLOUR_UNITS },

  // Dals & Pulses
  { id: "toor-dal", name: "Toor Dal", tamil: "துவரம் பருப்பு", image: dal, category: "dals", units: DAL_UNITS, bestseller: true },
  { id: "urad-dal", name: "Urad Dal", tamil: "உளுந்தம் பருப்பு", image: urad, category: "dals", units: DAL_UNITS },
  { id: "chana-dal", name: "Chana Dal", tamil: "கடலை பருப்பு", image: dal, category: "dals", units: DAL_UNITS },
  { id: "moong-dal", name: "Moong Dal", tamil: "பாசிப்பருப்பு", image: dal, category: "dals", units: DAL_UNITS },
  { id: "masoor-dal", name: "Masoor Dal", tamil: "மசூர் பருப்பு", image: dal, category: "dals", units: DAL_UNITS },
  { id: "green-gram", name: "Green Gram", tamil: "பச்சை பயறு", image: dal, category: "dals", units: DAL_UNITS },
  { id: "black-channa", name: "Black Channa", tamil: "கருப்பு கொண்டைக்கடலை", image: dal, category: "dals", units: DAL_UNITS },
  { id: "white-channa", name: "White Channa", tamil: "வெள்ளை கொண்டைக்கடலை", image: dal, category: "dals", units: DAL_UNITS },
  { id: "rajma", name: "Rajma", tamil: "ராஜ்மா", image: dal, category: "dals", units: DAL_UNITS },
  { id: "kollu", name: "Kollu (Horse Gram)", tamil: "கொள்ளு", image: dal, category: "dals", units: DAL_UNITS },
  { id: "pattani", name: "Pattani (Peas)", tamil: "பட்டாணி", image: dal, category: "dals", units: DAL_UNITS },
  { id: "peanuts", name: "Peanuts", tamil: "நிலக்கடலை", image: dal, category: "dals", units: DAL_UNITS },

  // Oils & Ghee
  { id: "groundnut-oil", name: "Groundnut Oil", tamil: "கடலை எண்ணெய்", image: oil, category: "oils", units: OIL_UNITS, bestseller: true },
  { id: "sunflower-oil", name: "Sunflower Oil", tamil: "சூரியகாந்தி எண்ணெய்", image: oil, category: "oils", units: OIL_UNITS, bestseller: true },
  { id: "coconut-oil", name: "Coconut Oil", tamil: "தேங்காய் எண்ணெய்", image: coconutOil, category: "oils", units: ["200 ml", "500 ml", "1 L"] },
  { id: "sesame-oil", name: "Sesame Oil (Nallennai)", tamil: "நல்லெண்ணெய்", image: gingelly, category: "oils", units: ["500 ml", "1 L", "2 L"], bestseller: true },
  { id: "palm-oil", name: "Palm Oil", tamil: "பனை எண்ணெய்", image: oil, category: "oils", units: OIL_UNITS },
  { id: "mustard-oil", name: "Mustard Oil", tamil: "கடுகு எண்ணெய்", image: oil, category: "oils", units: ["200 ml", "500 ml", "1 L"] },
  { id: "ghee", name: "Ghee", tamil: "நெய்", image: coconutOil, category: "oils", units: ["200 ml", "500 ml", "1 L"] },

  // Whole Spices
  { id: "mustard-seeds", name: "Mustard Seeds", tamil: "கடுகு", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "cumin-seeds", name: "Cumin Seeds", tamil: "சீரகம்", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "fennel-seeds", name: "Fennel Seeds", tamil: "சோம்பு", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "pepper", name: "Pepper", tamil: "மிளகு", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "fenugreek", name: "Fenugreek", tamil: "வெந்தயம்", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "cardamom", name: "Cardamom", tamil: "ஏலக்காய்", image: mustard, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "cloves", name: "Cloves", tamil: "கிராம்பு", image: mustard, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "cinnamon", name: "Cinnamon", tamil: "பட்டை", image: mustard, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "star-anise", name: "Star Anise", tamil: "அன்னாசிப்பூ", image: mustard, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "bay-leaf", name: "Bay Leaf", tamil: "பிரியாணி இலை", image: curryLeaves, category: "spices", units: ["10 g", "25 g", "50 g"] },
  { id: "nutmeg", name: "Nutmeg", tamil: "ஜாதிக்காய்", image: mustard, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "dry-ginger", name: "Dry Ginger (Sukku)", tamil: "சுக்கு", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "sesame-seeds", name: "Sesame Seeds", tamil: "எள்", image: mustard, category: "spices", units: SPICE_UNITS },
  { id: "hing", name: "Hing (Asafoetida)", tamil: "பெருங்காயம்", image: turmeric, category: "spices", units: ["25 g", "50 g", "100 g"] },
  { id: "tamarind", name: "Tamarind (Puli)", tamil: "புளி", image: tamarind, category: "spices", units: ["200 g", "500 g", "1 kg"] },
  { id: "curry-leaves", name: "Dried Curry Leaves", tamil: "கருவேப்பிலை", image: curryLeaves, category: "spices", units: ["25 g", "50 g", "100 g"] },

  // Masala Powders
  { id: "turmeric-powder", name: "Turmeric Powder", tamil: "மஞ்சள் தூள்", image: turmeric, category: "masala", units: SPICE_UNITS },
  { id: "chilli-powder", name: "Chilli Powder", tamil: "மிளகாய் தூள்", image: chilli, category: "masala", units: SPICE_UNITS, bestseller: true },
  { id: "coriander-powder", name: "Coriander Powder", tamil: "மல்லி தூள்", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "pepper-powder", name: "Pepper Powder", tamil: "மிளகு தூள்", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "jeera-powder", name: "Jeera Powder", tamil: "சீரக தூள்", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "garam-masala", name: "Garam Masala", tamil: "கரம் மசாலா", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "chicken-masala", name: "Chicken Masala", tamil: "சிக்கன் மசாலா", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "mutton-masala", name: "Mutton Masala", tamil: "மட்டன் மசாலா", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "biryani-masala", name: "Biryani Masala", tamil: "பிரியாணி மசாலா", image: chilli, category: "masala", units: SPICE_UNITS },
  { id: "sambar-powder", name: "Sambar Powder", tamil: "சாம்பார் தூள்", image: sambar, category: "masala", units: SPICE_UNITS, bestseller: true },
  { id: "rasam-powder", name: "Rasam Powder", tamil: "ரசம் தூள்", image: rasam, category: "masala", units: SPICE_UNITS },
  { id: "idly-podi", name: "Idly Podi", tamil: "இட்லி பொடி", image: chilli, category: "masala", units: SPICE_UNITS, bestseller: true },

  // Salt & Sweeteners
  { id: "salt", name: "Salt", tamil: "உப்பு", image: salt, category: "salt-sweet", units: ["500 g", "1 kg"] },
  { id: "rock-salt", name: "Rock Salt", tamil: "கல் உப்பு", image: salt, category: "salt-sweet", units: ["500 g", "1 kg"] },
  { id: "sugar", name: "Sugar", tamil: "சர்க்கரை", image: sugar, category: "salt-sweet", units: ["500 g", "1 kg", "5 kg"] },
  { id: "brown-sugar", name: "Brown Sugar", tamil: "பழுப்பு சர்க்கரை", image: sugar, category: "salt-sweet", units: ["500 g", "1 kg"] },
  { id: "jaggery", name: "Jaggery", tamil: "வெல்லம்", image: jaggery, category: "salt-sweet", units: ["250 g", "500 g", "1 kg"] },
  { id: "palm-jaggery", name: "Palm Jaggery (Karupatti)", tamil: "கருப்பட்டி", image: jaggery, category: "salt-sweet", units: ["250 g", "500 g", "1 kg"] },
  { id: "honey", name: "Honey", tamil: "தேன்", image: jaggery, category: "salt-sweet", units: ["250 g", "500 g", "1 kg"] },

  // Pickles & Instant Mixes
  { id: "mango-pickle", name: "Mango Pickle", tamil: "மாங்காய் ஊறுகாய்", image: ketchup, category: "pickles", units: ["200 g", "500 g", "1 kg"], bestseller: true },
  { id: "lemon-pickle", name: "Lemon Pickle", tamil: "எலுமிச்சை ஊறுகாய்", image: ketchup, category: "pickles", units: ["200 g", "500 g", "1 kg"] },
  { id: "garlic-pickle", name: "Garlic Pickle", tamil: "பூண்டு ஊறுகாய்", image: ketchup, category: "pickles", units: ["200 g", "500 g"] },
  { id: "appalam", name: "Appalam (Papad)", tamil: "அப்பளம்", image: appalam, category: "pickles", units: SMALL_UNITS, bestseller: true },
  { id: "vadagam", name: "Vadagam", tamil: "வடகம்", image: appalam, category: "pickles", units: SMALL_UNITS },
  { id: "vathal", name: "Vathal", tamil: "வத்தல்", image: appalam, category: "pickles", units: SMALL_UNITS },
  { id: "idly-mix", name: "Idly Mix", tamil: "இட்லி மிக்ஸ்", image: atta, category: "pickles", units: ["200 g", "500 g", "1 kg"] },
  { id: "dosa-mix", name: "Dosa Mix", tamil: "தோசை மிக்ஸ்", image: atta, category: "pickles", units: ["200 g", "500 g", "1 kg"] },

  // Snacks
  { id: "murukku", name: "Murukku", tamil: "முறுக்கு", image: murukku, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "mixture", name: "Mixture", tamil: "மிக்சர்", image: namkeen, category: "snacks", units: ["100 g", "200 g", "400 g"] },
  { id: "kara-sev", name: "Kara Sev", tamil: "கார சேவு", image: namkeen, category: "snacks", units: SMALL_UNITS },
  { id: "thattai", name: "Thattai", tamil: "தட்டை", image: murukku, category: "snacks", units: SMALL_UNITS },
  { id: "seedai", name: "Seedai", tamil: "சீடை", image: murukku, category: "snacks", units: SMALL_UNITS },
  { id: "chips", name: "Chips", tamil: "சிப்ஸ்", image: chips, category: "snacks", units: ["52 g", "90 g", "165 g"] },
  { id: "banana-chips", name: "Banana Chips", tamil: "வாழைக்காய் சிப்ஸ்", image: chips, category: "snacks", units: SMALL_UNITS },
  { id: "potato-chips", name: "Potato Chips", tamil: "உருளைக்கிழங்கு சிப்ஸ்", image: chips, category: "snacks", units: ["52 g", "90 g", "165 g"] },
  { id: "popcorn", name: "Popcorn", tamil: "பாப்கார்ன்", image: chips, category: "snacks", units: ["50 g", "100 g", "200 g"] },
  { id: "boondhi", name: "Boondhi", tamil: "பூந்தி", image: namkeen, category: "snacks", units: SMALL_UNITS },
  { id: "peanut-candy", name: "Peanut Candy", tamil: "கடலை மிட்டாய்", image: cookies, category: "snacks", units: SMALL_UNITS },
  { id: "biscuits", name: "Biscuits", tamil: "பிஸ்கட்", image: cookies, category: "snacks", units: ["100 g", "250 g"] },
  { id: "chocolates", name: "Chocolates", tamil: "சாக்லேட்", image: cookies, category: "snacks", units: ["50 g", "100 g", "200 g"] },
  { id: "candy", name: "Candy", tamil: "மிட்டாய்", image: cookies, category: "snacks", units: ["50 g", "100 g", "200 g"] },

  // Beverages
  { id: "tea-powder", name: "Tea Powder", tamil: "தேயிலை தூள்", image: tea, category: "beverages", units: ["100 g", "250 g", "500 g", "1 kg"], bestseller: true },
  { id: "coffee-powder", name: "Coffee Powder", tamil: "காபி தூள்", image: filterCoffee, category: "beverages", units: ["100 g", "250 g", "500 g"], bestseller: true },
  { id: "instant-coffee", name: "Instant Coffee", tamil: "இன்ஸ்டன்ட் காபி", image: coffee, category: "beverages", units: ["25 g", "50 g", "100 g", "200 g"] },
  { id: "boost", name: "Boost", tamil: "பூஸ்ட்", image: horlicks, category: "beverages", units: ["200 g", "500 g", "1 kg"] },
  { id: "horlicks", name: "Horlicks", tamil: "ஹார்லிக்ஸ்", image: horlicks, category: "beverages", units: ["200 g", "500 g", "1 kg"] },
  { id: "bournvita", name: "Bournvita", tamil: "போர்ன்விட்டா", image: horlicks, category: "beverages", units: ["200 g", "500 g", "1 kg"] },
  { id: "soft-drinks", name: "Soft Drinks", tamil: "குளிர்பானங்கள்", image: cola, category: "beverages", units: ["300 ml", "750 ml", "1.25 L", "2 L"] },
  { id: "energy-drinks", name: "Energy Drinks", tamil: "எனர்ஜி பானங்கள்", image: cola, category: "beverages", units: ["250 ml", "500 ml"] },
  { id: "fruit-juice", name: "Fruit Juice", tamil: "பழச்சாறு", image: juice, category: "beverages", units: ["200 ml", "1 L"] },
  { id: "water", name: "Drinking Water", tamil: "குடிநீர்", image: water, category: "beverages", units: ["500 ml", "1 L", "2 L"] },
  { id: "coconut-milk", name: "Coconut Milk Powder", tamil: "தேங்காய் பால் தூள்", image: coconutMilk, category: "beverages", units: ["50 g", "100 g", "200 g"] },

  // Noodles & Pasta
  { id: "maggi", name: "Maggi", tamil: "மேகி", image: noodles, category: "noodles", units: ["1 pack", "4 pack", "8 pack"] },
  { id: "yippee", name: "Yippee", tamil: "யிப்பி", image: noodles, category: "noodles", units: ["1 pack", "4 pack"] },
  { id: "pasta", name: "Pasta", tamil: "பாஸ்தா", image: noodles, category: "noodles", units: ["200 g", "500 g"] },
  { id: "macaroni", name: "Macaroni", tamil: "மக்ரோனி", image: noodles, category: "noodles", units: ["200 g", "500 g"] },
  { id: "vermicelli", name: "Vermicelli", tamil: "சேமியா", image: noodles, category: "noodles", units: ["200 g", "500 g"] },
  { id: "ketchup", name: "Tomato Ketchup", tamil: "தக்காளி சாஸ்", image: ketchup, category: "noodles", units: ["200 g", "500 g", "1 kg"] },

  // Cleaning
  { id: "detergent", name: "Detergent Powder", tamil: "சலவை தூள்", image: detergent, category: "cleaning", units: ["500 g", "1 kg", "2 kg"], bestseller: true },
  { id: "dishwash-liquid", name: "Dish Wash Liquid", tamil: "பாத்திரம் கழுவும் திரவம்", image: dishwash, category: "cleaning", units: ["200 ml", "500 ml", "1 L"] },
  { id: "dishwash-bar", name: "Dish Wash Bar", tamil: "பாத்திர சோப்பு", image: dishwash, category: "cleaning", units: ["1 bar", "Pack of 3", "Pack of 5"] },
  { id: "floor-cleaner", name: "Floor Cleaner", tamil: "தரை சுத்தம் திரவம்", image: dishwash, category: "cleaning", units: ["500 ml", "1 L", "2 L"] },
  { id: "toilet-cleaner", name: "Toilet Cleaner", tamil: "கழிவறை சுத்தம் திரவம்", image: dishwash, category: "cleaning", units: ["500 ml", "1 L"] },
  { id: "phenyl", name: "Phenyl", tamil: "பினாயில்", image: dishwash, category: "cleaning", units: ["500 ml", "1 L", "5 L"] },
  { id: "hand-wash", name: "Hand Wash", tamil: "கை கழுவும் திரவம்", image: soap, category: "cleaning", units: ["200 ml", "500 ml", "Refill"] },
  { id: "soap", name: "Bath Soap", tamil: "சோப்பு", image: soap, category: "cleaning", units: ["75 g", "125 g", "Pack of 3"] },

  // Personal Care
  { id: "shampoo", name: "Shampoo", tamil: "ஷாம்பு", image: shampoo, category: "personal", units: ["Sachet", "175 ml", "340 ml"] },
  { id: "hair-oil", name: "Hair Oil", tamil: "முடி எண்ணெய்", image: coconutOil, category: "personal", units: ["100 ml", "200 ml", "500 ml"] },
  { id: "toothpaste", name: "Toothpaste", tamil: "பற்பசை", image: toothpaste, category: "personal", units: ["50 g", "100 g", "200 g"] },
  { id: "toothbrush", name: "Toothbrush", tamil: "பற்பசை தூரிகை", image: toothpaste, category: "personal", units: ["1 pc", "Pack of 2", "Pack of 4"] },
  { id: "face-wash", name: "Face Wash", tamil: "முக கழுவும் திரவம்", image: shampoo, category: "personal", units: ["50 g", "100 g", "150 g"] },
  { id: "talcum-powder", name: "Talcum Powder", tamil: "பவுடர்", image: shampoo, category: "personal", units: ["100 g", "200 g", "400 g"] },
  { id: "deodorant", name: "Deodorant", tamil: "டியோடரண்ட்", image: shampoo, category: "personal", units: ["150 ml", "220 ml"] },
  { id: "sanitary-napkins", name: "Sanitary Napkins", tamil: "நாப்கின்", image: shampoo, category: "personal", units: ["Pack of 6", "Pack of 8", "Pack of 16"] },

  // Baby Care
  { id: "diapers", name: "Diapers", tamil: "டயப்பர்", image: shampoo, category: "baby", units: ["Pack of 10", "Pack of 30", "Pack of 60"] },
  { id: "baby-soap", name: "Baby Soap", tamil: "குழந்தை சோப்பு", image: soap, category: "baby", units: ["75 g", "125 g"] },
  { id: "baby-powder", name: "Baby Powder", tamil: "குழந்தை பவுடர்", image: shampoo, category: "baby", units: ["100 g", "200 g", "400 g"] },
  { id: "baby-oil", name: "Baby Oil", tamil: "குழந்தை எண்ணெய்", image: coconutOil, category: "baby", units: ["100 ml", "200 ml"] },
  { id: "cerelac", name: "Cerelac", tamil: "செரிலாக்", image: horlicks, category: "baby", units: ["300 g", "400 g"] },

  // Pooja Items
  { id: "camphor", name: "Camphor", tamil: "கற்பூரம்", image: agarbatti, category: "pooja", units: ["10 g", "50 g", "100 g"] },
  { id: "agarbatti", name: "Agarbatti", tamil: "அகர்பத்தி", image: agarbatti, category: "pooja", units: ["Small", "Medium", "Family Pack"] },
  { id: "cotton-wick", name: "Cotton Wick", tamil: "திரி", image: agarbatti, category: "pooja", units: ["Small", "Medium", "Large"] },
  { id: "kumkum", name: "Kumkum", tamil: "குங்குமம்", image: chilli, category: "pooja", units: ["10 g", "25 g", "50 g"] },
  { id: "pooja-turmeric", name: "Pooja Turmeric", tamil: "மஞ்சள்", image: turmeric, category: "pooja", units: ["50 g", "100 g"] },
  { id: "match-box", name: "Match Box", tamil: "தீப்பெட்டி", image: agarbatti, category: "pooja", units: ["1 box", "Pack of 10"] },

  // Household
  { id: "plastic-cover", name: "Plastic Cover", tamil: "பிளாஸ்டிக் கவர்", image: detergent, category: "household", units: ["Small", "Medium", "Large"] },
  { id: "aluminum-foil", name: "Aluminum Foil", tamil: "அலுமினியம் ஃபாயில்", image: detergent, category: "household", units: ["9 m", "18 m", "72 m"] },
  { id: "tissue-paper", name: "Tissue Paper", tamil: "டிஷ்யூ பேப்பர்", image: detergent, category: "household", units: ["100 pulls", "200 pulls"] },
  { id: "garbage-bag", name: "Garbage Bag", tamil: "குப்பை பை", image: detergent, category: "household", units: ["Small", "Medium", "Large"] },
  { id: "buckets", name: "Buckets", tamil: "வாளி", image: detergent, category: "household", units: ["5 L", "10 L", "15 L"] },
  { id: "mugs", name: "Mugs", tamil: "கப்", image: detergent, category: "household", units: ["1 pc", "Pack of 2"] },

  // Tamil Specials
  { id: "idiyappam-flour", name: "Idiyappam Flour", tamil: "இடியாப்பம் மாவு", image: atta, category: "tamil-special", units: FLOUR_UNITS, bestseller: true },
  { id: "appam-mix", name: "Appam Mix", tamil: "அப்பம் மிக்ஸ்", image: atta, category: "tamil-special", units: ["200 g", "500 g", "1 kg"] },
  { id: "kambu-flour", name: "Kambu Flour", tamil: "கம்பு மாவு", image: atta, category: "tamil-special", units: FLOUR_UNITS },
  { id: "ragi-flour", name: "Ragi Flour", tamil: "ராகி மாவு", image: atta, category: "tamil-special", units: FLOUR_UNITS },
  { id: "sukku-coffee", name: "Sukku Coffee", tamil: "சுக்கு காபி", image: filterCoffee, category: "tamil-special", units: SMALL_UNITS },
  { id: "mor-milagai", name: "Mor Milagai", tamil: "மோர் மிளகாய்", image: chilli, category: "tamil-special", units: SMALL_UNITS },
  { id: "paruppu-podi", name: "Paruppu Podi", tamil: "பருப்பு பொடி", image: chilli, category: "tamil-special", units: SPICE_UNITS, bestseller: true },
  { id: "ellu-podi", name: "Ellu Podi", tamil: "எள்ளு பொடி", image: chilli, category: "tamil-special", units: SPICE_UNITS },
  { id: "poondu-podi", name: "Poondu Podi", tamil: "பூண்டு பொடி", image: chilli, category: "tamil-special", units: SPICE_UNITS },
  { id: "maavadu", name: "Maavadu Pickle", tamil: "மாவடு ஊறுகாய்", image: ketchup, category: "tamil-special", units: ["200 g", "500 g"] },
  { id: "gingelly-oil", name: "Gingelly Oil", tamil: "நல்லெண்ணெய்", image: gingelly, category: "tamil-special", units: ["500 ml", "1 L", "2 L"], bestseller: true },
];
