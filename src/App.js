import { useCallback, useEffect, useState } from 'react';
import throttle from 'lodash.throttle'

import './App.css';

import Dart from './Dart';
import Placeholder from './Placeholder'

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
    const offset = Math.random() * Math.random() * 100
    const theta = Math.random() * 2 * Math.PI
    const xOffset = offset * Math.cos(theta)
    const yOffset = offset * Math.sin(theta)

    setDarts([...darts, <Dart key={Date.now()} x={x + xOffset} y={y + yOffset} />])
  }, 125, { leading: false }), [])

  const fireOnce = fireDart.flush

  useEffect(() => {
    if (!coords) return

    fireDart({ ...coords, darts})
  }, [coords, darts, fireDart])

  return (
    <div className="App" onClick={fireOnce} onPointerDown={startFiring} onPointerUp={stopFiring} onPointerLeave={stopFiring} onPointerMove={updateCoords}>
      <Placeholder done={coords} />
      {darts}
    </div>
  );
}

export default App;
