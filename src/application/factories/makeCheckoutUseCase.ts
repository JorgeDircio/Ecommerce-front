import { ApiCartRepository } from "@/infrastructure/payments/repositories/apiCartRepository";
import { useCaseCheckoutCart } from "@/application/use-cases/cart.use-case";
import { FetchHttpClient } from "@/infrastructure/adapters/fetchHttp";

export function makeCheckoutUseCase() {
	const httpClient = new FetchHttpClient();
  const repo = new ApiCartRepository(httpClient);
  return new useCaseCheckoutCart(repo);
}
