import { z } from "zod";

export const searchSchema = z.object({
  query: z.string().min(1),
  type: z.enum(["test", "news"]), // test is for the test page, news is for the news page
});
