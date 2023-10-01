## [How to use Context Api in React](https://reactjs.org/docs/context.html).

 ##### step:1. import create createContext and called it using variable.(Globally)
 ##### 2. export it(createContext).
 
```ruby
import React from 'react';
import { createContext } from 'react'; //Globally import No.1

export const UserContext = createContext(); //export No. 2

const Context = ({children}) => {

const me = { name: 'bipul', ages: '25 years' }

const authInfo = { me }
```

 
 
##### 3. Global export property name and(.Provider) as children. And then export the function.
 ```
  return (
  
        <UserContext.Provider value={ authInfo}> // NO.3
            {children}
        </UserContext.Provider> 
        
 );

export default Context; //export the function
```

##### 4. Go (index.js) root file and rep the (App)js file with context

```ruby
import Context from './contextsApi/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context> // No. 4
      <App />
    </Context>
  </React.StrictMode>
);
reportWebVitals();

```

##### 5. to received data 
* Go to another file and use uesContext like this:

```ruby
import { UserContext } from './contextsApi/Context';

 const {me} = useContext(UserContext);
 
 ```
#### Written by [Md Bipul Hossain](https://web.facebook.com/bipulFB)
