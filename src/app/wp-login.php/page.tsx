import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { ROUTES } from "@/lib/routes";
import WpLoginForm from "./WpLoginForm";
import "./wp-login.css";

export default async function WpLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect(ROUTES.wpAdmin);
  }

  return <WpLoginForm />;
}
