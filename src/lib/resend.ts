import { Resend } from "resend";
import { WORDPRESS_LOGO_URL } from "./assets";

export const WP_SITE_NAME = "WordPress";
const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://fintelegram.com";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");
  return new Resend(apiKey);
}

export function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL || `${WP_SITE_NAME} <onboarding@resend.dev>`;
}

/** WordPress prefixes subjects with [Site Name]. */
export function formatWordPressSubject(subject: string): string {
  const prefix = `[${WP_SITE_NAME}] `;
  if (subject.startsWith(`[${WP_SITE_NAME}]`)) return subject;
  return `${prefix}${subject}`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildEmailHtml(
  subject: string,
  body: string,
  options?: { siteUrl?: string; recipientEmail?: string; logoUrl?: string },
): string {
  const siteUrl = options?.siteUrl ?? SITE_URL;
  const logo = options?.logoUrl ?? WORDPRESS_LOGO_URL;
  const safeSubject = escapeHtml(subject);
  const safeSiteUrl = escapeHtml(siteUrl);
  const sentToLine = options?.recipientEmail
    ? `<p style="margin:0 0 16px;">This email has been sent to ${escapeHtml(options.recipientEmail)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeSubject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f0f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f0f0f1;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background-color:#ffffff;border:1px solid #c3c4c7;">
          <tr>
            <td align="center" style="padding:28px 40px 20px;border-bottom:1px solid #dcdcde;">
              <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                <img src="${escapeHtml(logo)}" alt="WordPress" width="84" height="84" style="display:block;width:84px;height:84px;margin:0 auto 16px;border:0;" />
              </a>
              <p style="margin:0;font-size:20px;font-weight:600;line-height:1.3;">
                <a href="${safeSiteUrl}" style="color:#1d2327;text-decoration:none;">${WP_SITE_NAME}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;font-size:14px;line-height:1.6;color:#3c434a;">
              <div style="font-size:14px;line-height:1.6;color:#3c434a;">
                ${body}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background-color:#f6f7f7;border-top:1px solid #dcdcde;font-size:13px;line-height:1.6;color:#3c434a;">
              ${sentToLine}
              <p style="margin:0;">
                Regards,<br />
                All at ${WP_SITE_NAME}<br />
                <a href="${safeSiteUrl}" style="color:#2271b1;text-decoration:none;">${safeSiteUrl}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
