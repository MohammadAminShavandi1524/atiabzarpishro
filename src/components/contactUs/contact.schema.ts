import { z } from "zod";

type ValidationMessages = {
  nameRequired: string;
  phoneRequired: string;
  emailRequired: string;
  emailInvalid: string;
  companyRequired: string;
  messageRequired: string;
};

export const createContactSchema = ({
  nameRequired,
  phoneRequired,
  emailRequired,
  emailInvalid,
  companyRequired,
  messageRequired,
}: ValidationMessages) =>
  z.object({
    name: z.string().min(1, nameRequired).max(50),
    phone: z.string().min(1, phoneRequired).max(20),

    email: z.string().min(1, emailRequired).email(emailInvalid).max(50),

    companyName: z.string().min(1, companyRequired).max(50),
    message: z.string().min(1, messageRequired).max(500),
  });

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
