import { useEffect, useState, useRef } from 'react'

const Dart = ({ x = 0, y = 0 }) => {
  const [style, setStyle] = useState({})
  const ref = useRef()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const deg = Math.floor(Math.random() * 360) - 180;

      setStyle({
        transform: `rotate(${deg}deg) scale(0.2)`,
        top: `${y - 50}px`,
        left: `${x - 50}px`,
      })
    })
  }, [x, y])


  return <div className='Dart_Container' style={style} ref={ref}>
    <div className='Dart'>
      <div className='Head' />
      <div className='Butt' />
    </div>
  </div>
}

export default Dart
