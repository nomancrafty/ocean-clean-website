"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Button } from "./Button";
import { services } from "@/lib/services";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", boolean>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Errors = {
      name: values.name.trim().length < 2,
      email: !emailRe.test(values.email.trim()),
      phone: values.phone.replace(/\D/g, "").length < 7,
      message: values.message.trim().length < 5,
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSubmitted(true);
    setValues({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 7000);
  };

  const fieldClasses = (hasError?: boolean) =>
    `rounded-[8px] border-[1.5px] px-4 py-3.5 bg-cream-100 text-ink-900 transition-all outline-none focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(217,142,42,0.12)] ${
      hasError ? "border-danger bg-red-50" : "border-line"
    }`;

  return (
    <div className="rounded-[22px] border border-line bg-white p-6 sm:p-9 shadow-md">
      <h3 className="text-[1.5rem] mb-1.5">Send Us a Message</h3>
      <p className="text-ink-500 mb-6">Fill out the form below and we&apos;ll reach out to schedule your free estimate.</p>

      {submitted && (
        <div className="flex items-center gap-3 rounded-[8px] border border-[#bfe6cd] bg-[#eaf7ef] text-[#176c3f] px-4.5 py-4 mb-4.5 font-medium">
          <Icon name="checkCircle" className="h-5.5 w-5.5 shrink-0" />
          <span>Thank you! Your request has been received — we&apos;ll be in touch shortly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4.5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-head font-bold text-[0.88rem] text-charcoal-900">
              Full Name <span className="text-amber-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Smith"
              autoComplete="name"
              value={values.name}
              onChange={update("name")}
              className={fieldClasses(errors.name)}
            />
            {errors.name && <small className="text-danger text-[0.8rem]">Please enter your name.</small>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-head font-bold text-[0.88rem] text-charcoal-900">
              Phone <span className="text-amber-600">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(615) 732-5377"
              autoComplete="tel"
              value={values.phone}
              onChange={update("phone")}
              className={fieldClasses(errors.phone)}
            />
            {errors.phone && <small className="text-danger text-[0.8rem]">Please enter a valid phone number.</small>}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="email" className="font-head font-bold text-[0.88rem] text-charcoal-900">
              Email <span className="text-amber-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={values.email}
              onChange={update("email")}
              className={fieldClasses(errors.email)}
            />
            {errors.email && <small className="text-danger text-[0.8rem]">Please enter a valid email address.</small>}
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="service" className="font-head font-bold text-[0.88rem] text-charcoal-900">
              Service Needed
            </label>
            <select
              id="service"
              value={values.service}
              onChange={update("service")}
              className={fieldClasses()}
            >
              <option value="">Select a service (optional)</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
              <option>Not Sure / Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="message" className="font-head font-bold text-[0.88rem] text-charcoal-900">
              How Can We Help? <span className="text-amber-600">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your driveway, patio or pavers..."
              value={values.message}
              onChange={update("message")}
              rows={5}
              className={`${fieldClasses(errors.message)} resize-y`}
            />
            {errors.message && <small className="text-danger text-[0.8rem]">Please tell us a little about your project.</small>}
          </div>
        </div>

        <div className="mt-5.5">
          <Button type="submit" block size="lg" showArrow>
            Request My Free Estimate
          </Button>
          <p className="text-[0.84rem] text-ink-500 mt-2.5">
            By submitting, you agree to be contacted about your request. We respect your privacy and never share your information.
          </p>
        </div>
      </form>
    </div>
  );
}
