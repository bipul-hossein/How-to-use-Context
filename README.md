# [How to use Context Api in React](https://reactjs.org/docs/context.html).

 #### 1. step:1 import create createContext and called it using variable.(Globally)
 #### 2. step:2 export it(createContext).

import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children}) => {

    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }



#### step:3 Global export property name and(.Provider) as children
#### step:4 Go index.js; rep the app.js with context 

  return (
        <UserContext.Provider value={ authInfo}>
            {children}
        </UserContext.Provider> 
        
);
};

export default Context;


#### step:5 to received data
* Go to another file and use uesContext like this:
 const {me} = useContext(UserContext);
