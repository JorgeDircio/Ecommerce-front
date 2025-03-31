import { useCallback, useEffect, useState } from 'react';
import { Transaction } from '@/domain/entities/transaction';
import { makeTransactionUseCase } from '@/application/factories/makeTransactionUseCase';

export const useTransactionDetail = (id: string) => {
	const [transaction, setTransaction] = useState<Transaction | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchTransaction = useCallback(async () => {
		try {
			const response: Transaction = await makeTransactionUseCase().getTransactionById(id);
			setTransaction(response);
			setLoading(false);
		} catch (err) {
			err = 'Hubo un error al cargar las transacciones.';
			console.error(err);
			setError("Error al cargar la transacción.");
			setLoading(false);
		}
	}, [id]);


	useEffect(() => {
		fetchTransaction();
	}, [fetchTransaction]);

	return { transaction, loading, error };
};