'use client'

import PaymentStatus from '@/ui/components/ui/checkout-form/payment-status/PaymentStatus';
import { useCheckout } from '@/ui/context/CheckoutContext';
import { cartItemsMock } from '@/mock/productsData.mock';

export default function PaymentSuccess() {
	const { responseData } = useCheckout();

	return responseData ? (
		<PaymentStatus
		  status={responseData.status}
		  buttonText="Volver al inicio"
		  buttonHref="/"
		  confirmationNumber={responseData.blumonpay_transaction_id}
		  items={cartItemsMock}
		/>
	  ) : (
		<div>Cargando información...</div>
	  );
}
