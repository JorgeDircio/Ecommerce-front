export interface HttpClient {
	get<T>(url: string, headers?: Record<string, string>): Promise<T>;
	post<T,  TRequest>(url: string, data:  TRequest, headers?: Record<string, string>): Promise<T>;
	put<T, U>(url: string, data: U, headers?: Record<string, string>): Promise<T>;
	delete<T>(url: string, headers?: Record<string, string>): Promise<T>;
}
