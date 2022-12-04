import { createContext, useEffect, useState } from 'react';
import{ IUser} from '../types/User'
import jwt_decode from 'jwt-decode'

interface UserContract {
  user: IUser,
  token: string
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


  var token = ''

  if (document.cookie.length > 0){
    token = document.cookie.replace('token=', '')
     
    user = jwt_decode<IUser>(token)
  }

 


export const UserContext = createContext({user, token} as UserContract);


export const User = ({children} : any) => {
  return(
    <UserContext.Provider value={{ user, token }}>{children}</UserContext.Provider>
  );
}