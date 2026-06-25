import { Resend } from "resend";
import { IMAGES, getAbsoluteImageUrl } from "./assets";

const SITE_NAME = "FinTelegram News";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");
  return new Resend(apiKey);
}

export function getFromEmail() {
  return process.env.RESEND_FROM_EMAIL || `${SITE_NAME} <onboarding@resend.dev>`;
}

export function buildEmailHtml(subject: string, body: string, logoUrl?: string): string {
  const logo = logoUrl ?? getAbsoluteImageUrl(IMAGES.wordpressLogo);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f0f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f0f0f1;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border:1px solid #c3c4c7;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
          <tr>
            <td style="padding:32px 40px 24px;text-align:center;border-bottom:1px solid #dcdcde;">
              <img src="${logo}" alt="WordPress" width="64" height="64" style="display:inline-block;width:64px;height:64px;" />
              <p style="margin:16px 0 0;font-size:20px;font-weight:600;color:#1d2327;line-height:1.3;">
                ${SITE_NAME}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px;">
              <h1 style="margin:0 0 20px;font-size:18px;font-weight:600;color:#1d2327;line-height:1.4;">
                ${subject}
              </h1>
              <div style="font-size:14px;line-height:1.6;color:#3c434a;">
                ${body}
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f6f7f7;padding:20px 40px;border-top:1px solid #dcdcde;">
              <p style="margin:0 0 8px;font-size:12px;color:#646970;line-height:1.5;">
                This email was sent from <strong>${SITE_NAME}</strong>
              </p>
              <p style="margin:0;font-size:12px;color:#a7aaad;line-height:1.5;">
                Powered by <a href="https://wordpress.org/" style="color:#2271b1;text-decoration:none;">WordPress</a>
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
