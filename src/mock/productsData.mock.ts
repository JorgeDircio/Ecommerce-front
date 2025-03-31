import { CartItem as CartItemType } from "@/domain/entities/cart";

export const cartItemsMock: CartItemType[] = [
	{
		price_data: {
			currency: 'mxn',
			id: '1',
			product_data: {
				name: 'Camisa Negra'
			},
			image: '/products/camisa_negra.jpg',
			unit_amount: 4
		},
		quantity: 2
	},
	{
		price_data: {
			currency: 'mxn',
			id: '2',
			product_data: {
				name: 'Camisa Negra'
			},
			image: '/products/pantalon_azul.jpg',
			unit_amount: 7
		},
		quantity: 1
	}
];