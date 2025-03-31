'use client'
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "@/domain/entities/cart";
import { CheckoutResponse } from "@/domain/entities/checkoutResponse";

interface CheckoutContextProps {
	items: CartItem[];
	responseData?: CheckoutResponse;
	setItems: (items: CartItem[]) => void;
	setResponseData: (data: CheckoutResponse) => void;
	clear: () => void;
}


const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

export const useCheckout = () => {
	const context = useContext(CheckoutContext);
	if (!context) {
		throw new Error('useCheckout debe usarse dentro del CheckoutProvider');
	}
	return context;
};

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
	const [items, setItems] = useState<CartItem[]>([]);
	const [responseData, setResponseData] = useState<CheckoutResponse | undefined>(undefined);

	const clear = () => {
		setItems([]);
		setResponseData(undefined);
	};

	return (
		<CheckoutContext.Provider value={{ items, responseData, setItems, setResponseData, clear }}>
			{children}
		</CheckoutContext.Provider>
	);
};
