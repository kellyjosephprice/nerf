import { useCallback, useState } from 'react';

import './App.css';

import Dart from './Dart';

function App() {
  const [darts, setDarts] = useState([])

  const fireDart = useCallback(event => {
    setDarts([...darts, <Dart key={Date.now()} x={event.clientX} y={event.clientY} />])
  }, [darts])

  return (
    <div className="App" onClick={fireDart}>
      {darts}
    </div>
  );
}

export default App;
