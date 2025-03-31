import { Transaction } from "@/domain/entities/transaction";
import { TransactionRepository } from "@/domain/repositories/transactionRepository";
import { Endpoints } from "@/infrastructure/config/endpoints";
import { HttpClient } from "@/infrastructure/ports/httpClient";

export class ApiTransactionRepository implements TransactionRepository {
	private httpClient: HttpClient;

	constructor(httpClient: HttpClient) {
		this.httpClient = httpClient;
	}

	async getTransaction(): Promise<Transaction[]> {
		return this.httpClient.get<Transaction[]>(Endpoints.listTransactions);
	}

	async getTransactionById(id: string): Promise<Transaction> {
		return this.httpClient.get<Transaction>(Endpoints.getTransactionById(id));
	}
}
