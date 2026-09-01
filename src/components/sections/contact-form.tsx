"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GhostButton, GhostLink } from "@/components/ui/ghost-button";
import { Reveal } from "@/components/motion/reveal";
import { submitContactForm, type ContactFormState } from "@/app/(es)/contacto/actions";
import { SERVICE_OPTIONS, WHATSAPP_URL } from "@/lib/constants";
import { type Locale, serviceOptionLabelsEn } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };

const fieldClass =
  "h-auto rounded-none border border-ink/30 bg-white px-4 py-3 text-base focus-visible:ring-0 focus-visible:border-sage-deep";

const copy = {
  es: {
    name: "Nombre",
    phone: "Teléfono",
    email: "Email",
    service: "Servicio",
    servicePlaceholder: "Selecciona un servicio",
    width: "Ancho del área (pies)",
    length: "Largo del área (pies)",
    notes: "Cuéntanos más (opcional)",
    notesPlaceholder: "Describe tu jardín, luego nos puedes mandar fotos por WhatsApp.",
    sending: "Enviando…",
    submit: "Enviar Solicitud",
  },
  en: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    service: "Service",
    servicePlaceholder: "Select a service",
    width: "Area Width (feet)",
    length: "Area Length (feet)",
    notes: "Tell us more (optional)",
    notesPlaceholder: "Describe your garden, then you can send us photos on WhatsApp.",
    sending: "Sending…",
    submit: "Send Request",
  },
} as const;

export function ContactForm({ locale = "es" }: { locale?: Locale }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const t = copy[locale];

  return (
    <Reveal direction="fade" delay={150}>
      <form action={formAction} className="mx-auto max-w-[720px] space-y-5">
        <input type="hidden" name="locale" value={locale} />
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="lf-name" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.name}
            </Label>
            <Input id="lf-name" name="nombre" autoComplete="name" required className={fieldClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lf-phone" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.phone}
            </Label>
            <Input id="lf-phone" name="telefono" type="tel" autoComplete="tel" required className={fieldClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="lf-email" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.email}
            </Label>
            <Input id="lf-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lf-service" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.service}
            </Label>
            <Select name="servicio" required>
              <SelectTrigger id="lf-service" className={`${fieldClass} w-full justify-between`}>
                <SelectValue placeholder={t.servicePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {locale === "en" ? serviceOptionLabelsEn[option] : option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="lf-width" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.width}
            </Label>
            <Input id="lf-width" name="ancho" type="number" min="0" step="0.5" inputMode="decimal" required className={fieldClass} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lf-length" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
              {t.length}
            </Label>
            <Input id="lf-length" name="largo" type="number" min="0" step="0.5" inputMode="decimal" required className={fieldClass} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lf-notes" className="text-xs font-bold uppercase tracking-[0.1em] text-ink">
            {t.notes}
          </Label>
          <Textarea
            id="lf-notes"
            name="detalles"
            rows={4}
            placeholder={t.notesPlaceholder}
            className={`${fieldClass} resize-y`}
          />
        </div>

        <GhostButton type="submit" disabled={pending} animated>
          {pending ? t.sending : t.submit}
        </GhostButton>

        {state.status === "success" && (
          <p role="status" className="text-sm font-medium text-sage-deep">
            {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p role="alert" className="text-sm font-medium text-red-700">
            {state.message}{" "}
            <GhostLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ml-2 !py-2 !px-4 !text-[11px]">
              WhatsApp
            </GhostLink>
          </p>
        )}
      </form>
    </Reveal>
  );
}
