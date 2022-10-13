import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash.throttle'

import './App.css';

import Dart from './Dart';

function App() {
  const [coords, setCoords] = useState(null)
  const [darts, setDarts] = useState([])

  const startFiring = useCallback(event => setCoords({ x: event.clientX, y: event.clientY }), [])
  const stopFiring = useCallback(() => setCoords(null), [])
  const updateCoords = useCallback(event => {
    if (!coords) return
    startFiring(event)
  }, [coords, startFiring])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fireDart = useCallback(throttle(({ x, y, darts }) => {
    x += Math.floor(Math.random() * 60) - 30
    y += Math.floor(Math.random() * 50) - 25

    setDarts([...darts, <Dart key={Date.now()} x={x} y={y} />])
  }, 100, { leading: false }), [])

  const fireOnce = fireDart.flush

  useEffect(() => {
    if (!coords) return

    fireDart({ ...coords, darts})
  }, [coords, darts, fireDart])

  return (
    <div className="App" onClick={fireOnce} onPointerDown={startFiring} onPointerUp={stopFiring} onPointerLeave={stopFiring} onPointerMove={updateCoords}>
      {darts}
    </div>
  );
}

export default App;
