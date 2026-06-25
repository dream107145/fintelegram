"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/data";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setMessage(
        "Thank you for your application. Your membership request has been received and is pending review."
      );
      setForm({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <div className="max-w-[1068px] mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Register and Subscribe for Financial Telegram" },
          ]}
        />

        <div className="max-w-[600px] mx-auto py-8">
          <h1 className="text-[28px] md:text-[32px] font-bold text-center mb-2">
            Register and Subscribe for Financial Telegram
          </h1>
          <p className="text-center text-ft-muted text-[14px] mb-4 italic">
            {SITE.tagline}
          </p>
          <p className="text-center text-[13px] text-ft-gray leading-relaxed mb-8 px-4">
            Thank you for your interest in a FinTelegram membership to have access
            to our premium content. Please apply for a membership with the
            registration form below. FinTelegram explicitly reserves the right to
            refuse an application for membership for whatever reason.
          </p>

          <div className="bg-ft-light-gray border border-ft-border p-8">
            {message && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-[13px] p-3 mb-4">
                {message}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] p-3 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-[13px] font-medium mb-1.5">
                  Username <span className="text-ft-red">*</span>
                </label>
                <input
                  id="username"
                  type="text"
                  value={form.username}
                  onChange={(e) => updateField("username", e.target.value)}
                  className="ft-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[13px] font-medium mb-1.5">
                  E-mail <span className="text-ft-red">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="ft-input"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[13px] font-medium mb-1.5">
                  Password <span className="text-ft-red">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  className="ft-input"
                  required
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-[13px] font-medium mb-1.5">
                  Repeat Password <span className="text-ft-red">*</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => updateField("confirmPassword", e.target.value)}
                  className="ft-input"
                  required
                  autoComplete="new-password"
                />
              </div>

              <button type="submit" className="ft-btn w-full" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-ft-border text-center text-[13px]">
              <p className="text-ft-muted">
                Already have an account?{" "}
                <Link href="/login" className="text-ft-red hover:underline font-medium">
                  Log in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
