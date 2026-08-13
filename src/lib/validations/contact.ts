import { z } from "zod";
import { SERVICE_OPTIONS } from "@/lib/constants";

export const contactSchema = z.object({
  nombre: z.string().trim().min(1, "Este campo es requerido"),
  telefono: z.string().trim().min(1, "Este campo es requerido"),
  email: z.string().trim().min(1, "Este campo es requerido").email("Email inválido"),
  servicio: z.enum(SERVICE_OPTIONS, {
    message: "Selecciona un servicio",
  }),
  ancho: z.coerce.number({ message: "Ingresa un número válido" }).positive("Debe ser mayor a 0"),
  largo: z.coerce.number({ message: "Ingresa un número válido" }).positive("Debe ser mayor a 0"),
  detalles: z.string().trim().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
