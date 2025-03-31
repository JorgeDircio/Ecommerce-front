export interface Product {
	id: string;
	currency: string;
	product_data: {
		name: string;
	};
	unit_amount: number;
	image: string;
}
