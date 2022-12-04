import { createContext, useEffect, useState } from 'react';
import{ IUser} from '../types/User'
import jwt_decode from 'jwt-decode'

interface UserContract {
  user: IUser
}

var user =
  {
    age: 0,
    cpf: '',
    email : 'string',
    exp : 0,
    iat : 0,
    id : 'string',
    name : 'string',
    verified : false
  }




  if (document.cookie.length > 0){
    const token = document.cookie.replace('token=', '')
     
    user = jwt_decode<IUser>(token)
  }

 


export const UserContext = createContext({user} as UserContract);


export const User = ({children} : any) => {
  return(
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}