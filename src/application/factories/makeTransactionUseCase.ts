import { ApiTransactionRepository } from "@/infrastructure/transactions/respositories/transactionRepository";
import { useCaseTransaction } from "../use-cases/transaction.use-case";
import { FetchHttpClient } from "@/infrastructure/adapters/fetchHttp";


export function makeTransactionUseCase() {
	const httpClient = new FetchHttpClient();
	const repo = new ApiTransactionRepository(httpClient);
	return new useCaseTransaction(repo);
}
