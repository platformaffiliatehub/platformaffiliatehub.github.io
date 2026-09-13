"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-12">
      <h1 className="mb-2 text-3xl font-bold text-brand-navy">Contact</h1>
      <p className="mb-8 text-brand-gray">
        Questions, corrections, or topic suggestions — we read every message.
      </p>

      {status === "sent" ? (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-green-800">
          Thanks — your message has been sent. We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-navy">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-brand-blue focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-navy">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-brand-blue focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-navy">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-brand-blue focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-brand-blue px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong sending your message. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
