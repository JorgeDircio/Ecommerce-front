const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

console.log("🔗 URL del backend:", process.env.NEXT_PUBLIC_API_URL);

export const Endpoints = {
	checkout: `${BASE_URL}/transactions`,
	getTransactionById: (id: string) => `${BASE_URL}/transactions/${id}`,
	listTransactions: `${BASE_URL}/transactions`,
};
