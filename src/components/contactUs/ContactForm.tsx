"use client";

import { useMemo, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ContactFormValues, createContactSchema } from "./contact.schema";
import { createContact } from "./contact.api";

import { useCustomToast } from "@/components/ui/custom-toast";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("Contact");

  const toast = useCustomToast();

  const isRTL = locale === "fa";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const formRef = useRef<HTMLFormElement>(null);
  const submitRef = useRef<HTMLDivElement>(null);

  const schema = useMemo(
    () =>
      createContactSchema({
        nameRequired: t("validation.nameRequired"),
        phoneRequired: t("validation.phoneRequired"),
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

  useGSAP(
    () => {
      if (!formRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const fields = formRef.current.querySelectorAll(".contact-form-field");

      gsap.fromTo(
        fields,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );

      if (submitRef.current) {
        gsap.fromTo(
          submitRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }
    },
    {
      scope: formRef,
    },
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="border-border border-t"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-2">
        {/* Name */}
        <div className="contact-form-field group/field border-border focus-within:border-b-custom-primary border-e border-b py-6 pe-6 transition-colors duration-500">
          <label
            htmlFor="name"
            className="text-muted-foreground group-focus-within/field:text-custom-primary block text-base font-medium transition-colors duration-300"
          >
            {t("form.name")}
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={t("form.namePlaceholder")}
            {...register("name")}
            className="text-foreground placeholder:text-muted-foreground/60 mt-4 w-full bg-transparent text-xl outline-none"
          />

          <div className="mt-3 min-h-6">
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="contact-form-field group/field border-border focus-within:border-custom-primary border-b py-6 ps-6 transition-colors duration-500">
          <label
            htmlFor="phone"
            className="text-muted-foreground group-focus-within/field:text-custom-primary block text-base font-medium transition-colors duration-300"
          >
            {t("form.phone")}
          </label>

          <input
            id="phone"
            type="tel"
            dir={locale === "en" ? "ltr" : "rtl"}
            autoComplete="tel"
            placeholder={t("form.phonePlaceholder")}
            {...register("phone")}
            className="text-foreground placeholder:text-muted-foreground/60 mt-4 w-full bg-transparent text-xl outline-none"
          />

          <div className="mt-3 min-h-6">
            {errors.phone && (
              <p className="text-destructive text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-2">
        {/* Email */}
        <div className="contact-form-field group/field border-border focus-within:border-b-custom-primary border-e border-b py-6 pe-6 transition-colors duration-500">
          <label
            htmlFor="email"
            className="text-muted-foreground group-focus-within/field:text-custom-primary block text-base font-medium transition-colors duration-300"
          >
            {t("form.email")}
          </label>

          <input
            id="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            placeholder={t("form.emailPlaceholder")}
            {...register("email")}
            className="text-foreground placeholder:text-muted-foreground/60 mt-4 w-full bg-transparent text-xl outline-none"
          />

          <div className="mt-3 min-h-6">
            {errors.email && (
              <p className="text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="contact-form-field group/field border-border focus-within:border-custom-primary border-b py-6 ps-6 transition-colors duration-500">
          <label
            htmlFor="companyName"
            className="text-muted-foreground group-focus-within/field:text-custom-primary block text-base font-medium transition-colors duration-300"
          >
            {t("form.companyName")}
          </label>

          <input
            id="companyName"
            type="text"
            autoComplete="organization"
            placeholder={t("form.companyPlaceholder")}
            {...register("companyName")}
            className="text-foreground placeholder:text-muted-foreground/60 mt-4 w-full bg-transparent text-xl outline-none"
          />

          <div className="mt-3 min-h-6">
            {errors.companyName && (
              <p className="text-destructive text-sm">
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="contact-form-field group/field border-border focus-within:border-custom-primary border-b py-6 transition-colors duration-500">
        <label
          htmlFor="message"
          className="text-muted-foreground group-focus-within/field:text-custom-primary block text-base font-medium transition-colors duration-300"
        >
          {t("form.message")}
        </label>

        <textarea
          id="message"
          rows={4}
          placeholder={t("form.messagePlaceholder")}
          {...register("message")}
          className="text-foreground placeholder:text-muted-foreground/60 mt-4 w-full resize-none bg-transparent text-xl leading-9 outline-none"
        />

        <div className="mt-3 min-h-6">
          {errors.message && (
            <p className="text-destructive text-sm">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div ref={submitRef} className="flex justify-end pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group/submit bg-custom-primary inline-flex cursor-pointer items-center gap-5 px-7 py-4 text-lg font-medium text-white transition-[opacity,transform] duration-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{isSubmitting ? t("form.sending") : t("form.submit")}</span>

          <ArrowIcon
            size={20}
            className="transition-transform duration-300 group-hover/submit:translate-x-1 ltr:mt-0.5 rtl:group-hover/submit:-translate-x-1"
          />
        </button>
      </div>
    </form>
  );
}
