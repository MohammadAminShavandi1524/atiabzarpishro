"use client";

import { useMemo } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormValues, createContactSchema } from "./contact.schema";
import { createContact } from "./contact.api";

import { useCustomToast } from "@/components/ui/custom-toast";

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("Contact");

  const toast = useCustomToast();

  const isRTL = locale === "fa";

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const schema = useMemo(
    () =>
      createContactSchema({
        nameRequired: t("validation.nameRequired"),

        phoneRequired: t("validation.phoneRequired"),
        phoneInvalid: t("validation.phoneInvalid"),

        emailRequired: t("validation.emailRequired"),
        emailInvalid: t("validation.emailInvalid"),

        companyRequired: t("validation.companyRequired"),

        messageRequired: t("validation.messageRequired"),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),

    defaultValues: {
      name: "",
      phone: "",
      email: "",
      companyName: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const payload = {
      full_name: data.name,

      phone_number: data.phone,

      email: data.email,

      company: data.companyName,

      message: data.message,
    };

    try {
      await createContact(payload);

      reset();

      toast.success(t("toast.submit.success"));
    } catch (error) {
      console.error("CREATE CONTACT ERROR:", error);

      toast.error(t("toast.submit.error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-t-border space-y-6 border-t pt-6"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <label
              htmlFor="name"
              className="text-foreground text-sm font-medium"
            >
              {t("form.name")}
            </label>

            {errors.name && (
              <span className="text-destructive text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={t("form.namePlaceholder")}
            {...register("name")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-12 w-full border px-4 text-sm transition-colors duration-200 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <label
              htmlFor="phone"
              className="text-foreground text-sm font-medium"
            >
              {t("form.phone")}
            </label>

            {errors.phone && (
              <span className="text-destructive text-xs">
                {errors.phone.message}
              </span>
            )}
          </div>

          <input
            id="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder={t("form.phonePlaceholder")}
            {...register("phone")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-12 w-full border px-4 text-sm transition-colors duration-200 outline-none"
          />
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <label
              htmlFor="email"
              className="text-foreground text-sm font-medium"
            >
              {t("form.email")}
            </label>

            {errors.email && (
              <span className="text-destructive text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <input
            id="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            placeholder={t("form.emailPlaceholder")}
            {...register("email")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-12 w-full border px-4 text-sm transition-colors duration-200 outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <label
              htmlFor="companyName"
              className="text-foreground text-sm font-medium"
            >
              {t("form.companyName")}
            </label>

            {errors.companyName && (
              <span className="text-destructive text-xs">
                {errors.companyName.message}
              </span>
            )}
          </div>

          <input
            id="companyName"
            type="text"
            autoComplete="organization"
            placeholder={t("form.companyPlaceholder")}
            {...register("companyName")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-12 w-full border px-4 text-sm transition-colors duration-200 outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <label
            htmlFor="message"
            className="text-foreground text-sm font-medium"
          >
            {t("form.message")}
          </label>

          {errors.message && (
            <span className="text-destructive text-xs">
              {errors.message.message}
            </span>
          )}
        </div>

        <textarea
          id="message"
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          {...register("message")}
          className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary w-full resize-none border px-4 py-3 text-sm leading-7 transition-colors duration-200 outline-none"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-custom-primary text-primary-foreground inline-flex min-w-[170px] cursor-pointer items-center justify-center gap-3 px-6 py-3 text-sm font-medium transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{isSubmitting ? t("form.sending") : t("form.submit")}</span>

          <ArrowIcon size={18} strokeWidth={1.8} />
        </button>
      </div>
    </form>
  );
}
