import { z } from "zod";
import { SERVICE_OPTIONS } from "@/lib/constants";

export const contactSchema = z.object({
  nombre: z.string().trim().min(1, "Este campo es requerido"),
  telefono: z.string().trim().min(1, "Este campo es requerido"),
  // Email and the area size are optional: the form asks only for the service, a phone number and a name.
  email: z.string().trim().email("Email inválido").or(z.literal("")),
  servicio: z.enum(SERVICE_OPTIONS, {
    message: "Selecciona un servicio",
  }),
  ancho: z.preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number({ message: "Ingresa un número válido" }).positive("Debe ser mayor a 0").optional()
  ),
  largo: z.preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number({ message: "Ingresa un número válido" }).positive("Debe ser mayor a 0").optional()
  ),
  detalles: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
