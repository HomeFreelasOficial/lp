import { createContext, useState } from "react";
import { Account } from "../../entities/account";
import axios from 'axios';

interface AccountContract {
  accounts: Account[]
  searchDataAccounts: Function
}

export const AccountContext = createContext({} as AccountContract);

const accounts: Account[] = [];

export const CardAccount = () => {
  const [clients, setClients] = useState<Account[]>([])
  const [error, setError] = useState<Error | null>(null)

  const searchDataAccounts = async () => {
    try {
      const res = await axios.get('https://api.homefreelas.com.br/jobs')
      setClients(res as unknown as any)
    } catch(err: any) {
      setError(err)
      console.error(error)
    }
  }

  clients.map(el => {
    accounts.push(
      new Account(el.id, el.userId, el.type, el.name, el?.perhour)
    )
  });

  return(
    <AccountContext.Provider value={{accounts, searchDataAccounts}} />
  );
}
