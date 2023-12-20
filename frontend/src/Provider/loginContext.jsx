import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ login, setLogin , user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}
