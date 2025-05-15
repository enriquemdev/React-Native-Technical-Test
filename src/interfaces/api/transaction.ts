export interface Transaction {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: string;
  amount: {
    currency: string;
    value: number;
  };
  origin: string;
  destination: string;
}
