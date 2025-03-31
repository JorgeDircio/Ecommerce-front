import { Transaction } from "@/domain/entities/transaction";
import { TransactionRepository } from "@/domain/repositories/transactionRepository";


export class useCaseTransaction {
	constructor(
		private repository: TransactionRepository,
	) {}

	async getTransaction(): Promise<Transaction[]> {
		return await this.repository.getTransaction();
	}

	async getTransactionById(id: string): Promise<Transaction> {
		return await this.repository.getTransactionById(id);
	}
}