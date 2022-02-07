import { useState } from 'react';
import './App.css';
import DateDuJour from './components/date-du-jour/date-du-jour';
import Horloge from './components/horloge/horloge';

function App() {

  const [display, setDisplay] = useState(false);

  const handleToggleDisplay = () => {
    setDisplay(c => !c);
  };

  return (
    <div className="App">
      <h1>Exo 06 - Le cycle de vie</h1>

      <button onClick={handleToggleDisplay}>Toggle</button>

      {display ? (
        <Horloge />
      ): (
        <DateDuJour />
      )}
    </div>
  );
}

export default App;
