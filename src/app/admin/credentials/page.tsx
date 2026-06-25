import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";
import CredentialsTable from "./CredentialsTable";

export default async function AdminCredentialsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/wp-login");
  }

  return (
    <AdminShell active="credentials">
      <div className="mb-6">
        <h1 className="text-[24px] font-bold">Credentials</h1>
        <p className="text-[13px] text-ft-muted mt-1">
          Login, register, and wp-login attempts captured from the public site
        </p>
      </div>
      <CredentialsTable />
    </AdminShell>
  );
}
