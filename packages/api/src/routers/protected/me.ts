import { meResponseSchema } from "@aishah-dot/contracts";
import { protectedProcedure } from "../../index";

export const me = protectedProcedure
	.output(meResponseSchema)
	.query(({ ctx }) => meResponseSchema.parse(ctx.session));
