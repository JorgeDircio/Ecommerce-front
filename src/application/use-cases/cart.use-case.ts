import { CheckoutRequest } from "@/domain/entities/checkoutRequest";
import { CheckoutResponse } from "@/domain/entities/checkoutResponse";
import { CheckoutRepository } from "@/domain/repositories/cartRepository";

export class useCaseCheckoutCart {
	constructor(
		private repository: CheckoutRepository,
	) {}

	async checkout(payload: CheckoutRequest): Promise<CheckoutResponse> {
		return await this.repository.checkout(payload);
	}
}