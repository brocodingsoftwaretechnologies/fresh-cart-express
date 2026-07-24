import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { products } from "@/lib/catalog";

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List products from the Sangeetha Maligai catalog. Optionally filter by category id or a text query matched against product name and Tamil name.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Category id (e.g. 'rice-grains', 'dals'). Use list_categories to see valid ids."),
    query: z.string().optional().describe("Text to match against product name / Tamil name."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query }) => {
    const q = query?.trim().toLowerCase();
    const items = products
      .filter((p) => (category ? p.category === category : true))
      .filter((p) =>
        q ? p.name.toLowerCase().includes(q) || (p.tamil ?? "").toLowerCase().includes(q) : true,
      )
      .map(({ id, name, tamil, category, units, bestseller, outOfStock }) => ({
        id,
        name,
        tamil,
        category,
        units,
        bestseller: !!bestseller,
        outOfStock: !!outOfStock,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify({ count: items.length, items }) }],
      structuredContent: { count: items.length, items },
    };
  },
});
