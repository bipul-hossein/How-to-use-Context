## [How to use Context Api in React](https://reactjs.org/docs/context.html).

 #### step:1 import create createContext and called it using variable.(Globally)
 
```ruby
import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children}) => {

    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }
```

 #### 2 export it(createContext).
 ```ruby
import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children}) => {

    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }
export default Context;
```
 
#### 3 Global export property name and(.Provider) as children

`
  return (
  
        <UserContext.Provider value={ authInfo}>
            {children}
        </UserContext.Provider> 
        
 );};
 ```ruby
export default Context;
```
`
#### 4 Go index.js; rep the app.js with context

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

#### 5 to received data
* Go to another file and use uesContext like this:

```ruby
import { UserContext } from './contextsApi/Context';

 const {me} = useContext(UserContext);
 
 ```
### Written by [Md Bipul Hossain](https://web.facebook.com/bipulFB)
