import { createContext, useState } from 'react';
import{ IUser} from '../types/User'
import jwt_decode from 'jwt-decode'

interface UserContract {
  user: IUser
}

const token = document.cookie.replace('token=', '')
   
const user = jwt_decode<IUser>(token)


export const UserContext = createContext({user} as UserContract);


export const User = ({children} : any) => {
  return(
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}