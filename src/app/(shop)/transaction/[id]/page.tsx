'use client';

import { useParams } from 'next/navigation';
import { useTransactionDetail } from '@/ui/hooks/useTransactionDetail';


export default function TransactionDetailPage() {
	const { id } = useParams() as { id: string };

	const { loading, error, transaction} = useTransactionDetail(id);

	if (loading) return <div className="text-center p-6">Cargando transacción...</div>;

	if (error) return <div className="text-center p-6">{error}</div>;

	if (!transaction) return <div className="text-center p-6">Transacción no encontrada.</div>;

	return (
		<div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Detalle de la Transacción</h1>
			<p><strong>ID:</strong> {transaction.id}</p>
			<p><strong>Cliente:</strong> {transaction.customer_name}</p>
			<p><strong>Monto:</strong> ${transaction.amount}</p>
			<p><strong>Moneda:</strong> {transaction.currency}</p>
			<p><strong>Estado:</strong> {transaction.status}</p>
			<p><strong>Fecha:</strong> {new Date(transaction.created_at).toLocaleString()}</p>
		</div>
	);
}