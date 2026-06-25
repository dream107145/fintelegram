import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function WpAdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/wp-login");
  }
  redirect("/admin/credentials");
}
