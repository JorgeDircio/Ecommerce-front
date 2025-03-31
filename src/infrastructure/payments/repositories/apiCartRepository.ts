
import { CheckoutRequest } from "@/domain/entities/checkoutRequest";
import { CheckoutResponse } from "@/domain/entities/checkoutResponse";
import { CheckoutRepository } from "@/domain/repositories/cartRepository";
import { Endpoints } from "@/infrastructure/config/endpoints";
import { HttpClient } from "@/infrastructure/ports/httpClient";

export class ApiCartRepository implements CheckoutRepository {
	private httpClient: HttpClient;

	constructor(httpClient: HttpClient) {
		this.httpClient = httpClient;
	}

	async checkout(cartItems: CheckoutRequest): Promise<CheckoutResponse> {
		return this.httpClient.post<CheckoutResponse, CheckoutRequest>(Endpoints.checkout, cartItems);
	}

}