import { healthCheckResponseSchema } from "@aishah-dot/contracts";
import { publicProcedure } from "../../index";

export const healthCheck = publicProcedure.output(healthCheckResponseSchema).query(() => "OK");
