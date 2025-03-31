import { CheckoutRequest } from "../entities/checkoutRequest";
import { CheckoutResponse } from "../entities/checkoutResponse";

export interface CheckoutRepository {
	checkout: (payload: CheckoutRequest) => Promise<CheckoutResponse>
  }
  