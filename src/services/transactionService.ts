import { api } from "./api";
import { Transaction } from "@/src/interfaces";

export const fetchTransactions = async (
  accountId: string,
): Promise<Transaction[]> => {
  const response = await api.get<{ items: Transaction[] }>(
    `/accounts/${accountId}/transactions`,
  );
  return response.data.items;
};
