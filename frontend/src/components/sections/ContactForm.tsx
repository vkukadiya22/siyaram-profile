"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", industry: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setErrorMessage(data?.error || `Failed to send email. Please email us directly at ${COMPANY_INFO.email}.`);
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly.");
    }
  };

  return (
    <div className="bg-surface-container-low p-5 sm:p-8 rounded border border-outline-variant relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-bold text-2xl sm:text-headline-lg text-on-surface mb-4 sm:mb-6">
          Send an Inquiry
        </h2>

        {status === "success" && (
          <div className="mb-6 p-4 bg-emerald-100 border border-emerald-400 text-emerald-800 rounded font-body-md">
            ✓ Thank you! Your inquiry has been sent to <strong>{COMPANY_INFO.email}</strong>. Our engineering team will review your specifications and contact you shortly.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded font-body-md">
            ✕ {errorMessage || `Something went wrong. Please try again or email us directly at ${COMPANY_INFO.email}.`}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot Spam Protection (Hidden from real users, traps automated bots) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="name">
                Full Name / Company *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full form-input-technical px-4 py-3 text-on-surface"
                placeholder="Your Name / Company Name"
              />
            </div>
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="phone">
                Phone / WhatsApp Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full form-input-technical px-4 py-3 text-on-surface"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="email">
                Email Address 
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full form-input-technical px-4 py-3 text-on-surface"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="industry">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full form-input-technical px-4 py-3 appearance-none text-on-surface"
              >
                <option value="">Select your industry</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Construction">Construction</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Heavy Engineering">Heavy Engineering</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-label-caps text-label-caps text-on-surface mb-2" htmlFor="message">
              Project Specification / Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full form-input-technical px-4 py-3 text-on-surface"
              placeholder="Leave us a message..."
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "submitting"}
            icon="mail"
            className="w-full md:w-auto font-bold"
          >
            {status === "submitting" ? "Sending Inquiry..." : "Send Inquiry (Email)"}
          </Button>
        </form>
      </div>
    </div>
  );
}
