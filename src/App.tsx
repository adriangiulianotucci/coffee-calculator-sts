import logo from './logo.svg';
import './App.css';
import { initializeFirebase } from './firebase/fcm';
import {  useState} from 'react';

function App() {
  const [token, setToken] = useState(undefined)

  const handleClick = () => {
    initializeFirebase(setToken)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={handleClick}
        >
          Obtener token
        </button>
        {token}
      </header>
    </div>
  );
}

export default App;
