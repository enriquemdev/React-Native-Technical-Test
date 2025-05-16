import { api } from "./api";
import { Account } from "@/src/interfaces";

export const fetchAccount = async (accountId: string): Promise<Account> => {
  const response = await api.get<Account>(`/accounts/${accountId}`);
  return response.data;
};
