import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { categories } from "@/lib/catalog";

export default defineTool({
  name: "list_categories",
  title: "List categories",
  description: "List all product categories available in the Sangeetha Maligai grocery shop.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(categories) }],
    structuredContent: { categories },
  }),
});
