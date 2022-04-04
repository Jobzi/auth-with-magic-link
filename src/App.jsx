import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './view/login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
