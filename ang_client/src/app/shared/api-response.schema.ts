import z, { boolean } from "zod"

const ApiResponseSchema = z.object({
    status:z.boolean(),
    message:z.string(),
    data:z.any()
});

export type IApiResponse = z.infer<typeof ApiResponseSchema>;