import { CartItem } from "@/domain/entities/cart";
import { CheckoutItem } from "./CheckoutItem";
import { useOrderSummary } from "@/ui/hooks/useOrderSummarry";

interface OrderSummaryProps {
	items: CartItem[];
	taxRate?: number;
}

export const OrderSummary = ({ items, taxRate = 0.0 }: OrderSummaryProps) => {
	const { subtotal, tax, total } = useOrderSummary(items, taxRate);

	return (
		<div className="border-b pb-4 mb-6">
			{items.map((item) => (
				<CheckoutItem
					key={item.price_data.id}
					id={item.price_data.id}
					name={item.price_data.product_data.name}
					currency={item.price_data.currency}
					quantity={item.quantity}
					unitAmount={item.price_data.unit_amount}
					image={item.price_data.image}
				/>
			))}
			<div className="mt-4 space-y-2">
				<div className="flex justify-between text-gray-700">
					<p>Subtotal</p>
					<p>${(subtotal).toFixed(2)}</p>
				</div>
				{taxRate > 0 && (
					<div className="flex justify-between text-gray-700">
						<p>Impuestos ({(taxRate * 100).toFixed(2)}%)</p>
						<p>${(tax).toFixed(2)}</p>
					</div>
				)}
				<div className="flex justify-between font-bold text-lg">
					<p>Total</p>
					<p>${(total).toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};
