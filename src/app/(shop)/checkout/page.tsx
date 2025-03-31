'use client'

import { CheckoutFormGeneric } from '@/ui/components/ui/checkout-form/CheckoutFormGeneric';
import { cartItemsMock } from '@/mock/productsData.mock';

export default function CheckoutPage() {
	return (
		<CheckoutFormGeneric items={cartItemsMock} />
	)
}
