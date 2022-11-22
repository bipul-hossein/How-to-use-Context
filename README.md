# [How to use Context Api in React](https://reactjs.org/docs/context.html).

 #### 1. step:1 import create createContext and called it using variable.(Globally)
 #### 2. step:2 export it(createContext).

```ruby
import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children}) => {

    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }
```


#### step:3 Global export property name and(.Provider) as children

```ruby
  return (
  
        <UserContext.Provider value={ authInfo}>
            {children}
        </UserContext.Provider> 
        
 );};
export default Context;
```
#### step:4 Go index.js; rep the app.js with context

```ruby
import Context from './contextsApi/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
reportWebVitals();

```

#### step:5 to received data
* Go to another file and use uesContext like this:

```ruby
import { UserContext } from './contextsApi/Context';

 const {me} = useContext(UserContext);
 
 ```
### Written by [Md Bipul Hossain](https://web.facebook.com/bipulhossainFB)
