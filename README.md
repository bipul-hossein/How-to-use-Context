# [How to use Context Api in React](https://reactjs.org/docs/context.html).

 1. step:1 import create createContext and called it using variable.(Globally)
 2. step:2 export it(createContext).

import React from 'react';
import { createContext } from 'react';

export const <span style="font-weight:bold;">UserContext</span> = createContext();

const Context = ({children}) => {

    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }


    return (

step:3 global export property name and(.Provider) as children

// step:4 go index.js; rep the app.js with context 
     
        <UserContext.Provider value={ authInfo}>
            {children}
        </UserContext.Provider>

// go to another file and use uesContext like this:
// const {me} = useContext(UserContext);

    
);
};

export default Context;
