import { create } from "zustand";
import { fetchAccount, fetchTransactions } from "@/src/services";
import { AccountState } from "@/src/interfaces";

export const useBankStore = create<AccountState>((set) => ({
  account: null,
  accountLoading: false,
  accountError: null,

  transactions: [],
  transactionsLoading: false,
  transactionsError: null,

  fetchAccountData: async (accountId: string) => {
    set({ accountLoading: true, accountError: null });
    try {
      const data = await fetchAccount(accountId);
      set({ account: data, accountLoading: false });
    } catch (error: any) {
      set({
        accountError: error.message || "Error al cargar la cuenta",
        accountLoading: false,
      });
    }
  },

  fetchTransactionsData: async (accountId: string) => {
    set({ transactionsLoading: true, transactionsError: null });
    try {
      const data = await fetchTransactions(accountId);
      set({ transactions: data, transactionsLoading: false });
    } catch (error: any) {
      set({
        transactionsError: error.message || "Error al cargar las transacciones",
        transactionsLoading: false,
      });
    }
  },

  fetchAllData: function (accountId: string) {
    this.fetchAccountData(accountId);
    this.fetchTransactionsData(accountId);
  },
}));
