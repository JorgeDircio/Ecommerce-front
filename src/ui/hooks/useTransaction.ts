import { useState, useEffect, useCallback } from 'react';
import { Transaction } from '@/domain/entities/transaction';
import { makeTransactionUseCase } from '@/application/factories/makeTransactionUseCase';

export const useTransactions = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchTransactions = useCallback(async () => {
		try {
			const response: Transaction[] = await makeTransactionUseCase().getTransaction();
			setTransactions(response);
			setLoading(false);
		} catch (err) {
			err = 'Hubo un error al cargar las transacciones.';
			console.error(err);
			setError("Error al cargar las transacciones.");
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchTransactions();
	}, [fetchTransactions]);

	return { transactions, loading, error };
};