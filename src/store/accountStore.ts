import { create } from "zustand";
import { fetchAccount, fetchTransactions } from "../services";
import { AccountState } from "../interfaces";

export const useAccountStore = create<AccountState>((set) => ({
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

  fetchAllData: (accountId: string) => {
    set((state) => {
      state.fetchAccountData(accountId);
      state.fetchTransactionsData(accountId);
      return state;
    });
  },
}));
