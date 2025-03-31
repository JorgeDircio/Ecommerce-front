import { z } from "zod";
import dayjs from "dayjs";

export const CheckoutSchema = z.object({
	name: z.string().min(10, "Mínimo 10 caracteres").regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios"),
	email: z.string().email("Correo no válido"),
	cardNumber: z
		.string()
		.regex(/^\d{16}$/, "Debe contener 16 dígitos"),
	expDate: z
		.string()
		.regex(/^\d{2}\/\d{2}$/, "Formato MM/YY")
		.refine((value) => {
			const [mm] = value.split("/").map(Number);
			return mm >= 1 && mm <= 12;
		}, {
			message: "El mes debe estar entre 01 y 12",
		})
		.refine((value) => {
			const [mm, yy] = value.split("/").map(Number);

			const today = dayjs();
			const currentMonth = today.month() + 1;
			const currentYear = today.year() % 100;

			if (yy < currentYear) return false;
			if (yy === currentYear && mm <= currentMonth) return false;

			return true;
		}, {
			message: "La tarjeta está vencida",
		}),
	cvc: z.string().regex(/^\d{3,4}$/, "Debe tener 3 o 4 dígitos"),
	currency: z.string().min(3, "Selecciona una moneda válida"),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
