
export interface CustomerInformation {
	address1: string;
	city: string;
	country: string;
	email: string;
	firstName: string;
	ip: string;
	lastName: string;
	middleName: string;
	phone1: string;
	postalCode: string;
	state: string;
  }
  
  export interface NoPresentCardData {
	cardNumber: string;
	cardholderName: string;
	cvv: string;
	expirationMonth: string;
	expirationYear: string;
  }
  
  export interface CheckoutRequest {
	amount: number;
	currency: string;
	customerInformation: CustomerInformation;
	noPresentCardData: NoPresentCardData;
  }
  