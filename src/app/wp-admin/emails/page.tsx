import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";
import { ROUTES } from "@/lib/routes";
import EmailComposer from "./EmailComposer";

export default async function WpAdminEmailsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect(ROUTES.wpLogin);
  }

  return (
    <AdminShell active="emails">
      <div className="mb-6">
        <h1 className="text-[24px] font-bold">Emails</h1>
        <p className="text-[13px] text-ft-muted mt-1">
          Send WordPress-styled emails to any address via Resend
        </p>
      </div>
      <EmailComposer />
    </AdminShell>
  );
}
