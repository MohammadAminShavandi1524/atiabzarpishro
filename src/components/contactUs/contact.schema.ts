import { z } from "zod";

export const createContactSchema = (messages: {
  nameRequired: string;
  phoneRequired: string;
  companyRequired: string;
  messageRequired: string;
}) =>
  z.object({
    name: z.string().trim().min(1, messages.nameRequired),

    phone: z.string().trim().min(1, messages.phoneRequired),

    companyName: z.string().trim().min(1, messages.companyRequired),

    message: z.string().trim().min(1, messages.messageRequired),
  });

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
