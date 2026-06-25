import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";

export default async function WpAdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect(ROUTES.wpLogin);
  }
  redirect(ROUTES.wpAdminCredentials);
}
