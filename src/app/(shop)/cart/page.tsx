'use client'

import { useRouter } from 'next/navigation'
import { CartItemCard } from "@/ui/components/cart/CartItem";
import { cartItemsMock } from "@/mock/productsData.mock";

export default function CartPage() {
	const router = useRouter();
	const total = cartItemsMock.reduce((acc, item) => acc + item.price_data.unit_amount * item.quantity, 0);

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-6">
			<h1 className="text-2xl font-bold">🛒 Carrito de Compras</h1>

			<div className="space-y-4">
				{cartItemsMock.map((item) => (
					<CartItemCard key={item.price_data.id} item={item} />
				))}
			</div>
			<div className="text-right pt-4 border-t mt-6 space-y-2">
				<p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>

				<button
					onClick={() => router.push('/checkout')}
					className="mt-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
				>
					Proceder a pagar
				</button>
			</div>
		</div>
	);
}
