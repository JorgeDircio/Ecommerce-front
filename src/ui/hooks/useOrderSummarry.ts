import { CartItem } from '@/domain/entities/cart';

export const useOrderSummary = (items: CartItem[], taxRate?: number) => {
    const subtotal = items.reduce((acc, item) => acc + item.price_data.unit_amount * item.quantity, 0);
    const tax = taxRate ? subtotal * taxRate : 0;
    const total = subtotal + tax;

    return {
        subtotal,
        tax,
        total,
    };
};