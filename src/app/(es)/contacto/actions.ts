"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";
import { EMAIL } from "@/lib/constants";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

const messages = {
  es: {
    invalid: "Revisa los campos marcados e inténtalo de nuevo.",
    unavailable:
      "No pudimos enviar tu solicitud en este momento. Escríbenos directo por WhatsApp mientras lo resolvemos.",
    success: "Recibimos tu solicitud. Te contactamos pronto.",
  },
  en: {
    invalid: "Please check the highlighted fields and try again.",
    unavailable:
      "We couldn't send your request right now. Message us directly on WhatsApp while we sort it out.",
    success: "We received your request. We'll be in touch soon.",
  },
} as const;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const locale = formData.get("locale") === "en" ? "en" : "es";
  const t = messages[locale];

  const raw = {
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    servicio: formData.get("servicio"),
    ancho: formData.get("ancho"),
    largo: formData.get("largo"),
    detalles: formData.get("detalles"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: t.invalid,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { nombre, telefono, email, servicio, ancho, largo, detalles } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set. Contact form submission was not sent.");
    return {
      status: "error",
      message: t.unavailable,
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "AGAVE Landscaping PR <onboarding@resend.dev>",
      to: EMAIL,
      replyTo: email,
      subject: `Nueva solicitud de estimado: ${nombre}`,
      text: [
        `Idioma del visitante: ${locale === "en" ? "Inglés" : "Español"}`,
        `Nombre: ${nombre}`,
        `Teléfono: ${telefono}`,
        `Email: ${email}`,
        `Servicio: ${servicio}`,
        `Ancho del área: ${ancho} pies`,
        `Largo del área: ${largo} pies`,
        `Detalles: ${detalles || "(sin detalles adicionales)"}`,
      ].join("\n"),
    });

    return {
      status: "success",
      message: t.success,
    };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      status: "error",
      message: t.unavailable,
    };
  }
}
