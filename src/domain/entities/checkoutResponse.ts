export interface CheckoutResponse {
	customer_name: string;
	amount: number;
	currency: string;
	status: 'completed' | 'failed' | 'pending';
	created_at: string;
	customer_email: string;
	id: string;
	blumonpay_transaction_id: string;
  }
  