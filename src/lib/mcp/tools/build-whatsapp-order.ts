import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/lib/catalog";
import { SHOP } from "@/lib/shop-config";

export default defineTool({
  name: "build_whatsapp_order",
  title: "Build WhatsApp order link",
  description:
    "Build a pre-filled WhatsApp order message and wa.me link for Sangeetha Maligai from a list of items. Does not send anything — the customer taps the link to send the order themselves.",
  inputSchema: {
    items: z
      .array(
        z.object({
          productId: z.string().describe("Product id from list_products."),
          unit: z.string().describe("One of the product's supported units (e.g. '1 kg', '500 g')."),
          qty: z.number().int().min(1).max(999),
        }),
      )
      .min(1)
      .max(50),
    customerName: z.string().min(1).max(80),
    phone: z.string().min(5).max(20).describe("Customer contact phone."),
    address: z.string().min(3).max(400),
  },
  annotations: { readOnlyHint: true, idempotentHint: false, openWorldHint: false },
  handler: ({ items, customerName, phone, address }) => {
    const resolved = items.map((it, i) => {
      const p = products.find((p) => p.id === it.productId);
      if (!p) throw new Error(`Unknown productId: ${it.productId}`);
      return `${i + 1}. ${p.name} (${it.unit}) - ${it.qty} Qty`;
    });
    const token = `FC-${Math.floor(1000 + Math.random() * 9000)}`;
    const msg = [
      "Hello,",
      "",
      `I want to order from ${SHOP.name}:`,
      "",
      ...resolved,
      "",
      `Customer Name: ${customerName}`,
      `Phone Number: ${phone}`,
      `Address: ${address}`,
      "",
      `Order Token: #${token}`,
      "",
      "Please confirm my order.",
    ].join("\n");
    const url = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;
    return {
      content: [{ type: "text", text: url }],
      structuredContent: { url, token, message: msg },
    };
  },
});
