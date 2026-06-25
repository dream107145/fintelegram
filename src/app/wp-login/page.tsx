import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import WpLoginForm from "./WpLoginForm";
import "./wp-login.css";

export default async function WpLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/wp-admin");
  }

  return <WpLoginForm />;
}
