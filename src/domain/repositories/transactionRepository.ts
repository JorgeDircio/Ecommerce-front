import { Transaction } from "../entities/transaction";

export interface TransactionRepository {
	getTransaction: () => Promise<Transaction[]>
	getTransactionById: (id: string) => Promise<Transaction>
  }
  