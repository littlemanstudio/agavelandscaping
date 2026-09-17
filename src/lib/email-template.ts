import { SITE_URL } from "@/lib/constants";

type ContactEmailData = {
  nombre: string;
  telefono: string;
  email: string;
  servicio: string;
  ancho: number;
  largo: number;
  detalles: string;
  locale: "es" | "en";
};

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e7d9b9;" valign="top" width="34%">
        <span style="font-family: 'Oswald', Arial, sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #86996f;">${label}</span>
      </td>
      <td style="padding: 14px 0; border-bottom: 1px solid #e7d9b9;" valign="top">
        <span style="font-family: 'Karla', Arial, sans-serif; font-size: 15px; color: #2f3030;">${esc(value)}</span>
      </td>
    </tr>`;
}

export function buildContactEmailHtml(data: ContactEmailData) {
  const { nombre, telefono, email, servicio, ancho, largo, detalles, locale } = data;
  const logoUrl = `${SITE_URL}/img/logo/agave-mark.png`;

  return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nueva solicitud de estimado</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4ead6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4ead6;">
      <tr>
        <td align="center" style="padding: 40px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width: 600px; max-width: 100%; background-color: #ffffff;">
            <tr>
              <td align="center" style="background-color: #2f3030; padding: 36px 32px 30px;">
                <img src="${logoUrl}" width="48" height="48" alt="Agave Landscaping PR" style="display: block; margin: 0 auto 14px;" />
                <div style="font-family: 'Oswald', Arial, sans-serif; font-size: 15px; letter-spacing: 0.32em; text-transform: uppercase; color: #f4ead6;">
                  Agave Landscaping PR
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding: 32px 32px 8px;">
                <div style="font-family: 'Oswald', Arial, sans-serif; font-size: 22px; letter-spacing: 0.04em; text-transform: uppercase; color: #2f3030;">
                  Nueva Solicitud de Estimado
                </div>
                <div style="font-family: 'Karla', Arial, sans-serif; font-size: 13px; color: #4f5050; margin-top: 6px;">
                  Idioma del visitante: ${locale === "en" ? "Inglés" : "Español"}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 32px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Nombre", nombre)}
                  ${row("Teléfono", telefono)}
                  ${row("Email", email)}
                  ${row("Servicio", servicio)}
                  ${row("Ancho del área", `${String(ancho)} pies`)}
                  ${row("Largo del área", `${String(largo)} pies`)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 20px 32px 36px;">
                <div style="font-family: 'Oswald', Arial, sans-serif; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #86996f; margin-bottom: 8px;">
                  Detalles
                </div>
                <div style="font-family: 'Karla', Arial, sans-serif; font-size: 15px; color: #2f3030; line-height: 1.6; white-space: pre-wrap;">${esc(detalles || "(sin detalles adicionales)")}</div>
              </td>
            </tr>

            <tr>
              <td style="background-color: #f4ead6; padding: 20px 32px; text-align: center;">
                <div style="font-family: 'Karla', Arial, sans-serif; font-size: 12px; color: #4f5050;">
                  Responde a este correo para contactar directamente a ${esc(nombre)}.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
