"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simple client-side success state; wire to an API route or external
    // service (e.g. Formspree) for real submissions.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card space-y-4"
      aria-label="Contact form"
    >
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="text-xs font-medium text-slate-200"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-aqua-400/60 transition focus:ring-2"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="text-xs font-medium text-slate-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-aqua-400/60 transition focus:ring-2"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="text-xs font-medium text-slate-200"
        >
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-aqua-400/60 transition focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full justify-center"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-xs text-emerald-300">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      )}
    </form>
  );
}

