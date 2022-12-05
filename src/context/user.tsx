import { createContext, useState } from 'react'
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
  data: UserContextData
  login: Function
}

export const UserContext = createContext({} as UserContextContract)

const BASE_URL = 'http://localhost:1234'

export const UserContextWrapper = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [data, setData] = useState<UserContextData>({ user: null, token: '', accounts: [] })

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.request({
        url: `${BASE_URL}/auth/sign-in`,
        data: { email, password }
      })
      console.log(data)
      setData({ user: data.user, token: data.jwt, accounts: data.accounts })
      setCookie('token', data.jwt)
    } catch(error: any) {
      console.error(error)
      throw error.response.data
    }
  }

  return (
    <UserContext.Provider value={{ data, login }}>
      {children}
    </UserContext.Provider>
  )
}