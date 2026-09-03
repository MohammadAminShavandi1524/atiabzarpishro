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
      className="border-t-border space-y-5 border-t pt-5 sm:space-y-6 sm:pt-6"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Name */}
        <div className="min-w-0">
          <div className="mb-2 flex items-center justify-between sm:gap-4">
            <label
              htmlFor="name"
              className="text-foreground shrink-0 text-sm font-medium"
            >
              {t("form.name")}
            </label>

            {errors.name && (
              <span className="text-destructive text-xs leading-5 sm:text-end pt-1">
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
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-11 w-full min-w-0 border px-3.5 text-sm transition-colors duration-200 outline-none sm:h-12 sm:px-4"
          />
        </div>

        {/* Phone */}
        <div className="min-w-0">
          <div className="mb-2 flex items-center justify-between sm:gap-4">
            <label
              htmlFor="phone"
              className="text-foreground shrink-0 text-sm font-medium"
            >
              {t("form.phone")}
            </label>

            {errors.phone && (
              <span className="text-destructive text-xs leading-5 sm:text-end pt-1">
                {errors.phone.message}
              </span>
            )}
          </div>

          <input
            dir={locale === "en" ? "ltr" : "rtl"}
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t("form.phonePlaceholder")}
            {...register("phone")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-11 w-full min-w-0 border px-3.5 text-sm transition-colors duration-200 outline-none sm:h-12 sm:px-4"
          />
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Email */}
        <div className="min-w-0">
           <div className="mb-2 flex items-center justify-between sm:gap-4">
            <label
              htmlFor="email"
              className="text-foreground shrink-0 text-sm font-medium"
            >
              {t("form.email")}
            </label>

            {errors.email && (
              <span className="text-destructive text-xs leading-5 sm:text-end pt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t("form.emailPlaceholder")}
            {...register("email")}
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-11 w-full min-w-0 border px-3.5 text-sm transition-colors duration-200 outline-none sm:h-12 sm:px-4"
          />
        </div>

        {/* Company */}
        <div className="min-w-0">
           <div className="mb-2 flex items-center justify-between sm:gap-4">
            <label
              htmlFor="companyName"
              className="text-foreground shrink-0 text-sm font-medium"
            >
              {t("form.companyName")}
            </label>

            {errors.companyName && (
              <span className="text-destructive text-xs leading-5 sm:text-end pt-1">
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
            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary h-11 w-full min-w-0 border px-3.5 text-sm transition-colors duration-200 outline-none sm:h-12 sm:px-4"
          />
        </div>
      </div>

      {/* Message */}
      <div className="min-w-0">
        <div className="mb-2 flex items-center justify-between sm:gap-4">
          <label
            htmlFor="message"
            className="text-foreground shrink-0 text-sm font-medium"
          >
            {t("form.message")}
          </label>

          {errors.message && (
            <span className="text-destructive text-xs leading-5 sm:text-end pt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <textarea
          id="message"
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          {...register("message")}
          className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-custom-primary min-h-[145px] w-full resize-none border px-3.5 py-3 text-sm leading-7 transition-colors duration-200 outline-none sm:min-h-[155px] sm:px-4"
        />
      </div>

      {/* Submit */}
      <div className="xss:justify-end flex justify-stretch pt-1 sm:pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-custom-primary text-primary-foreground xss:w-auto xss:min-w-[170px] inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-3 px-5 py-3 text-sm font-medium transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-50 sm:px-6"
        >
          <span>{isSubmitting ? t("form.sending") : t("form.submit")}</span>

          <ArrowIcon size={18} strokeWidth={1.8} />
        </button>
      </div>
    </form>
  );
}
