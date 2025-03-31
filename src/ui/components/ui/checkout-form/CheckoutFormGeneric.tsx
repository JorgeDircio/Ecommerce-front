'use client'

import { OrderSummary } from './OrderSummary';
import { CartItem } from '@/domain/entities/cart';
import { useCheckoutForm } from "@/ui/hooks/useCheckoutForm";

type CheckoutFormGenericProps = {
	items: CartItem[];
	taxRate?: number;
};

export const CheckoutFormGeneric = ({ items, taxRate }: CheckoutFormGenericProps) => {

	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		onSubmit,
		isSubmitting,
		isValid,
		errors,
	} = useCheckoutForm();


	return (
		<div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-8">
			<div>
				<h2 className="text-xl font-semibold mb-4">Pagar a StakNine</h2>
				<OrderSummary items={items} taxRate={taxRate} />
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-4">Pago con tarjeta</h2>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<input {...register("name")} className="w-full p-2 border rounded" placeholder="Nombre en la tarjeta" />
					{errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

					<input {...register("email")} className="w-full p-2 border rounded" placeholder="Correo electrónico" />
					{errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

					<input {...register("cardNumber")} maxLength={16} className="w-full p-2 border rounded" placeholder="1234 1234 1234 1234" />
					{errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}

					<select
						{...register("currency")}
						className="w-full p-2 border rounded"
						defaultValue=""
					>
						<option value="" disabled>
							Selecciona la moneda
						</option>
						<option value="484">MXN - Peso Mexicano</option>
						<option value="840">USD - Dólar Estadounidense</option>
						<option value="978">EUR - Euro</option>
						<option value="124">CAD - Dólar Canadiense</option>
						<option value="826">GBP - Libra Esterlina</option>
					</select>
					{errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}

					<div className="flex gap-2">
						<input
							{...register("expDate")}
							className="w-1/2 p-2 border rounded"
							placeholder="MM/YY"
							onChange={(e) => {
								let value = e.target.value.replace(/\D/g, "");
								if (value.length >= 3) {
									value = value.slice(0, 2) + "/" + value.slice(2, 4);
								}
								setValue("expDate", value);
								trigger("expDate");
							}}
						/>
						<input {...register("cvc")} maxLength={4} className="w-1/2 p-2 border rounded" placeholder="CVC" />
					</div>
					{errors.expDate && <p className="text-red-500 text-sm">{errors.expDate.message}</p>}
					{errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}

					<button type="submit" disabled={!isValid || isSubmitting} className={`w-full ${isValid && !isSubmitting ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white font-bold py-2 rounded transition`}>
						{isSubmitting ? 'Procesando...' : 'Pagar'}
					</button>
				</form>
			</div>
		</div>
	);
};
