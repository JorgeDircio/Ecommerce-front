import React from "react";
import { CartItem as CartItemType } from "@/domain/entities/cart";
import Image from "next/image";

interface Props {
	item: CartItemType;
}

export const CartItemCard: React.FC<Props> = ({ item }) => {
	return (
		<div className="flex items-center border p-4 rounded-md shadow-md gap-4">
			<Image
				src={item.price_data.image}
				alt={item.price_data.product_data.name}
				className="w-24 h-24 object-cover"
				width={550}
				height={550}
			/>

			<div className="flex-1">
				<h2 className="text-lg font-semibold">{item.price_data.product_data.name}</h2>
				<p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
				<p className="text-sm text-gray-800 font-bold">${item.price_data.unit_amount.toFixed(2)}</p>
			</div>
		</div>
	);
};
