import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '../entities/user'
import { Account } from '../entities/account'
import { useCookies } from 'react-cookie'

interface UserContextData {
  token: string
  user: User | null
  accounts: Account[]
}

interface UserContextContract {
  dataUser: UserContextData
  login: Function
}

export const UserContext = createContext({} as UserContextContract)

const BASE_URL = 'http://localhost:1234'

export const UserContextWrapper = ({ children }: any) => {
  const [dataUser, setDataUser] = useState<UserContextData>({ user: null, token: '', accounts: [] })

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.request({
        url: `${BASE_URL}/auth/sign-in`,
        method: 'post',
        data: { email, password }
      })
      setDataUser({ user: data.body.user, token: data.body.jwt, accounts: data.body.accounts })
    } catch(error: any) {
      console.error(error)
      throw error.response.data
    }
  }

  return (
    <UserContext.Provider value={{ dataUser, login }}>
      {children}
    </UserContext.Provider>
  )
}