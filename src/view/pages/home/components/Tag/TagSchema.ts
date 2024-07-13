import { z } from "zod";

const TagSchema = z.object({
	name: z.string(),
	icon: z.string(),
	properties: z.string(),
});

export default TagSchema;
