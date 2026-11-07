"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GhostButton, GhostLink } from "@/components/ui/ghost-button";
import { Reveal } from "@/components/motion/reveal";
import { submitContactForm, type ContactFormState } from "@/app/(es)/contacto/actions";
import { SERVICE_OPTIONS, WHATSAPP_URL } from "@/lib/constants";
import { type Locale, serviceOptionLabelsEn } from "@/lib/i18n";

const initialState: ContactFormState = { status: "idle" };

const fieldClass =
  "h-auto rounded-none border border-ink/30 bg-white px-4 py-3 text-base focus-visible:ring-0 focus-visible:border-sage-deep";

type StepKey = "servicio" | "telefono" | "nombre";
const STEPS: StepKey[] = ["servicio", "telefono", "nombre"];

// One question at a time. The service is a tap, then a phone number to send the quote to, then a name.
// Area size and email are no longer asked; the quote call collects them.
const copy = {
  es: {
    servicio: "¿Qué necesitas?",
    telefono: "¿A qué número te enviamos el estimado?",
    telefonoHint: "WhatsApp o teléfono, solo lo usamos para esto.",
    nombre: "¿Cómo te llamas?",
    needService: "Escoge un servicio para continuar.",
    needPhone: "Agrega un número donde te podamos contactar.",
    needName: "Agrega tu nombre para saber por quién preguntar.",
    step: (n: number, total: number) => `${n} de ${total}`,
    next: "Siguiente",
    back: "Atrás",
    sending: "Enviando…",
    submit: "Enviar solicitud",
  },
  en: {
    servicio: "What do you need?",
    telefono: "What number can we send your estimate to?",
    telefonoHint: "WhatsApp or phone, we only use it for this.",
    nombre: "What's your name?",
    needService: "Pick a service to continue.",
    needPhone: "Add a number we can reach you on.",
    needName: "Add your name so we know who to ask for.",
    step: (n: number, total: number) => `${n} of ${total}`,
    next: "Next",
    back: "Back",
    sending: "Sending…",
    submit: "Send Request",
  },
} as const;

export function ContactForm({ locale = "es" }: { locale?: Locale }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const t = copy[locale];
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<StepKey, string>>({ servicio: "", telefono: "", nombre: "" });
  const [problem, setProblem] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const moved = useRef(false);

  const key = STEPS[step];
  const last = step === STEPS.length - 1;

  // Focus the new question after a step change, never on first paint (that would scroll the page).
  useEffect(() => {
    if (moved.current && key !== "servicio") input.current?.focus({ preventScroll: true });
  }, [step, key]);

  function check(k: StepKey, v: string) {
    if (k === "servicio" && !v) return t.needService;
    if (k === "telefono" && v.replace(/\D/g, "").length < 7) return t.needPhone;
    if (k === "nombre" && v.trim().length < 2) return t.needName;
    return "";
  }

  function advance(nextValues = values) {
    const msg = check(key, nextValues[key]);
    setProblem(msg);
    if (msg) return;
    if (!last) {
      moved.current = true;
      setStep(step + 1);
      return;
    }
    const fd = new FormData();
    fd.set("locale", locale);
    fd.set("servicio", nextValues.servicio);
    fd.set("telefono", nextValues.telefono.trim());
    fd.set("nombre", nextValues.nombre.trim());
    startTransition(() => formAction(fd));
  }

  function pick(option: string) {
    const next = { ...values, servicio: option };
    setValues(next);
    setProblem("");
    moved.current = true;
    setStep(1);
  }

  function onChange(v: string) {
    setValues((cur) => ({ ...cur, [key]: v }));
    if (problem) setProblem("");
  }

  const done = state.status === "success";

  return (
    <Reveal direction="fade" delay={150}>
      <form
        className="mx-auto max-w-[720px] space-y-6"
        noValidate
        aria-busy={pending}
        onSubmit={(e) => {
          e.preventDefault();
          if (!pending) advance();
        }}
      >
        {!done && (
          <>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em] text-ink" aria-hidden="true">
              <span>{t.step(step + 1, STEPS.length)}</span>
              <span className="h-[2px] flex-1 bg-ink/15">
                <span
                  className="block h-full origin-left bg-sage-deep transition-transform duration-500 motion-reduce:transition-none"
                  style={{ transform: `scaleX(${(step + 1) / STEPS.length})` }}
                />
              </span>
            </div>

            {key === "servicio" ? (
              <fieldset className="space-y-3">
                <legend className="text-lg font-bold text-ink">{t.servicio}</legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label={t.servicio}>
                  {SERVICE_OPTIONS.map((option) => {
                    const on = values.servicio === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => pick(option)}
                        className={`min-h-[52px] border px-4 py-3 text-left text-base transition-colors ${
                          on ? "border-sage-deep bg-sage-deep text-white" : "border-ink/30 bg-white text-ink hover:border-sage-deep"
                        }`}
                      >
                        {locale === "en" ? serviceOptionLabelsEn[option] : option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="lf-step" className="text-lg font-bold text-ink">
                  {key === "telefono" ? t.telefono : t.nombre}
                </Label>
                <Input
                  key={key}
                  id="lf-step"
                  ref={input}
                  value={values[key]}
                  onChange={(e) => onChange(e.target.value)}
                  type={key === "telefono" ? "tel" : "text"}
                  inputMode={key === "telefono" ? "tel" : "text"}
                  autoComplete={key === "telefono" ? "tel" : "name"}
                  aria-describedby="lf-step-note"
                  className={fieldClass}
                />
              </div>
            )}

            <p
              id="lf-step-note"
              role={problem ? "alert" : undefined}
              className={`min-h-[1.5em] text-sm ${problem ? "font-medium text-red-700" : "text-ink/70"}`}
            >
              {problem || (key === "telefono" ? t.telefonoHint : "")}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {key !== "servicio" && (
                <GhostButton type="submit" disabled={pending} animated>
                  {pending ? t.sending : last ? t.submit : t.next}
                </GhostButton>
              )}
              {step > 0 && (
                <button
                  type="button"
                  disabled={pending}
                  onClick={() => {
                    moved.current = true;
                    setProblem("");
                    setStep(step - 1);
                  }}
                  className="min-h-[44px] text-sm font-medium text-ink underline underline-offset-4"
                >
                  {t.back}
                </button>
              )}
            </div>
          </>
        )}

        {state.status === "success" && (
          <p role="status" className="text-base font-medium text-sage-deep">
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
