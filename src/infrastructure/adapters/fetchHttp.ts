import { HttpClient } from "../ports/httpClient";

export class FetchHttpClient implements HttpClient {

	async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
		const response = await fetch(url, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', ...headers },
		});

		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}

	async post<T, U>(url: string, data: U, headers?: Record<string, string>): Promise<T> {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', ...headers },
			body: JSON.stringify(data),
		});

		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}

	async put<T, U>(url: string, data: U, headers?: Record<string, string>): Promise<T> {
		const response = await fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json', ...headers },
			body: JSON.stringify(data),
		});

		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}

	async delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json', ...headers },
		});

		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}
}
