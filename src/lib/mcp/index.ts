import { defineMcp } from "@lovable.dev/mcp-js";
import listCategories from "./tools/list-categories";
import listProducts from "./tools/list-products";
import getShopInfo from "./tools/get-shop-info";
import buildWhatsappOrder from "./tools/build-whatsapp-order";

export default defineMcp({
  name: "sangeetha-maligai-mcp",
  title: "Sangeetha Maligai",
  version: "0.1.0",
  instructions:
    "Tools for Sangeetha Maligai, a Tamil Nadu grocery shop. Browse categories and products, look up shop info, and build a pre-filled WhatsApp order link for the customer to send.",
  tools: [listCategories, listProducts, getShopInfo, buildWhatsappOrder],
});
