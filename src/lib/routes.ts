export const ROUTES = {
  home: "/",
  frontPage: "/front-page",
  pmsLogin: "/pms-login",
  pmsRegister: "/pms-register",
  wpLogin: "/wp-login.php",
  wpAdmin: "/wp-admin",
  wpAdminCredentials: "/wp-admin/credentials",
  wpAdminEmails: "/wp-admin/emails",
} as const;

export const LEGACY_REDIRECTS: Record<string, string> = {
  "/login": ROUTES.pmsLogin,
  "/login/": ROUTES.pmsLogin,
  "/register": ROUTES.pmsRegister,
  "/register/": ROUTES.pmsRegister,
  "/wp-login": ROUTES.wpLogin,
  "/wp-login/": ROUTES.wpLogin,
  "/home": ROUTES.home,
  "/home/": ROUTES.home,
  "/admin": ROUTES.wpAdminCredentials,
  "/admin/": ROUTES.wpAdminCredentials,
  "/admin/login": ROUTES.wpLogin,
  "/admin/login/": ROUTES.wpLogin,
  "/admin/credentials": ROUTES.wpAdminCredentials,
  "/admin/credentials/": ROUTES.wpAdminCredentials,
  "/admin/emails": ROUTES.wpAdminEmails,
  "/admin/emails/": ROUTES.wpAdminEmails,
};
