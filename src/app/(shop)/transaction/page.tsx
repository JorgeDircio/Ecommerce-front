'use client';

import Link from 'next/link';
import { useTransactions } from '@/ui/hooks/useTransaction';

export default function TransactionPage() {
	const { loading, error, transactions } = useTransactions();

	if (loading) return <div className="text-center p-6">Cargando transacciones...</div>;
	if (error) return <div className="text-center p-6">{error}</div>;

	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Listado de Transacciones</h1>
			{transactions.map((transaction) => (
				<Link
					key={transaction.id}
					href={`/transaction/${transaction.id}`}
					className="block p-4 bg-white rounded-lg shadow mb-2 hover:bg-gray-100 transition"
				>
					<p className="font-semibold">{transaction.customer_name}</p>
					<p>{transaction.status} - ${transaction.amount}</p>
					<p className="text-sm text-gray-500">{new Date(transaction.created_at).toLocaleString()}</p>
				</Link>
			))}
		</div>
	);
}
