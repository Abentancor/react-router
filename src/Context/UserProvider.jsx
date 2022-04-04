import React, { createContext, useState } from 'react';


export const UserContext = createContext();

const UserProvider = (props) => {

    const [user, setUser] = useState(false);

    const sigIn = () => {setUser(true)};
    const sigOut = () => {setUser(false)};

  return (
      <UserContext.Provider value={{user, sigIn,sigOut}}>
          {props.children}
      </UserContext.Provider>
  )
};

export default UserProvider;
