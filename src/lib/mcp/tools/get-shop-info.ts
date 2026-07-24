import { defineTool } from "@lovable.dev/mcp-js";
import { SHOP } from "@/lib/shop-config";

export default defineTool({
  name: "get_shop_info",
  title: "Get shop info",
  description: "Return the shop name, tagline, address, phone, WhatsApp number and opening hours.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SHOP) }],
    structuredContent: { shop: SHOP },
  }),
});
