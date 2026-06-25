"use client";

import { useState, useEffect, FormEvent, useCallback } from "react";
import type { EmailLog } from "@/lib/supabase";
import { buildEmailHtml, formatWordPressSubject } from "@/lib/resend";

export default function EmailComposer() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [logs, setLogs] = useState<EmailLog[]>([]);

  const fetchLogs = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/emails");
      if (res.ok) {
        const data = await res.json();
        setLogs(data.emails || []);
      }
    } catch {
      // silent
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch("/api/admin/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, subject, body }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setMessage(`Email sent successfully to ${to}`);
      setTo("");
      setSubject("");
      setBody("");
      fetchLogs();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send email");
    } finally {
      setLoading(false);
    }
  }

  const previewSubject = subject ? formatWordPressSubject(subject) : "";
  const previewHtml =
    subject && body
      ? buildEmailHtml(previewSubject, body, { recipientEmail: to || "user@example.com" })
      : "";

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white border border-ft-border p-6">
        <h2 className="text-[16px] font-bold mb-4">Compose Email</h2>

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
            <label htmlFor="to" className="block text-[13px] font-medium mb-1.5">
              To
            </label>
            <input
              id="to"
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="ft-input"
              placeholder="recipient@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-[13px] font-medium mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="ft-input"
              placeholder="Email subject"
              required
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-[13px] font-medium mb-1.5">
              Message Body (HTML supported)
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="ft-input min-h-[160px] resize-y"
              placeholder="Write your message here. You can use basic HTML tags like <p>, <strong>, <a>."
              required
            />
          </div>
          <button type="submit" className="ft-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
      </div>

      <div>
        <div className="bg-white border border-ft-border p-6 mb-6">
          <h2 className="text-[16px] font-bold mb-4">Preview</h2>
          {previewHtml ? (
            <div
              className="border border-ft-border rounded overflow-hidden"
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          ) : (
            <p className="text-[13px] text-ft-muted italic">
              Fill in subject and body to see a live preview
            </p>
          )}
        </div>

        <div className="bg-white border border-ft-border p-6">
          <h2 className="text-[16px] font-bold mb-4">Sent Emails</h2>
          {logs.length === 0 ? (
            <p className="text-[13px] text-ft-muted">No emails sent yet.</p>
          ) : (
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="border-b border-ft-border pb-3 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium">{log.to_email}</span>
                    <span
                      className={`text-[11px] uppercase font-bold ${
                        log.status === "sent" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-ft-muted mt-1">{log.subject}</p>
                  <p className="text-[11px] text-ft-muted">
                    {new Date(log.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
