"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/data";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, remember }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }

      setError(
        "ERROR: Incorrect username or password. Please try again or reset your password."
      );
      setPassword("");
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
            { label: "Financial Telegram Member Login" },
          ]}
        />

        <div className="max-w-[600px] mx-auto py-8">
          <h1 className="text-[32px] font-bold text-center mb-2">
            Financial Telegram Member Login
          </h1>
          <p className="text-center text-ft-muted text-[14px] mb-8 italic">
            {SITE.tagline}
          </p>

          <div className="bg-ft-light-gray border border-ft-border p-8">
            <h2 className="text-[18px] font-bold mb-1">Welcome! Log into your account</h2>
            <p className="text-[13px] text-ft-muted mb-6">
              Sign in to access premium FinTelegram content
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] p-3 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-[13px] font-medium mb-1.5">
                  Username or Email Address
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="ft-input"
                  required
                  autoComplete="username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[13px] font-medium mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ft-input"
                  required
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="remember" className="text-[13px] text-ft-gray">
                  Remember Me
                </label>
              </div>

              <button type="submit" className="ft-btn w-full" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-ft-border text-center text-[13px]">
              <Link href="#" className="text-ft-red hover:underline">
                Forgot your password? Get help
              </Link>
              <p className="mt-3 text-ft-muted">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-ft-red hover:underline font-medium">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
