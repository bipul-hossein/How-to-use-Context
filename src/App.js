
import { useContext } from 'react';
import './App.css';
import { UserContext } from './contextsApi/Context';

function App() {

  const {me} = useContext(UserContext);
  console.log(me)
  return (
    <div className="App">
      
      <h1>this is bipul hossain</h1>
    
    </div>
  );
}

export default App;
