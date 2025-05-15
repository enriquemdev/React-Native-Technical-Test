import { Account, Transaction } from "@/src/interfaces";

export interface AccountState {
  account: Account | null;
  accountLoading: boolean;
  accountError: string | null;
  transactions: Transaction[];
  transactionsLoading: boolean;
  transactionsError: string | null;
  fetchAccountData: (accountId: string) => Promise<void>;
  fetchTransactionsData: (accountId: string) => Promise<void>;
  fetchAllData: (accountId: string) => void;
}
