import { useEffect, useState, useRef } from 'react'

const Dart = ({ x = 0, y = 0 }) => {
  const [style, setStyle] = useState({})
  const ref = useRef()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const deg = Math.floor(Math.random() * 360) - 180;
      const a = Math.abs(x - (window.innerWidth / 2));
      const b = Math.abs(window.innerHeight - y);
      const duration = 100 + 0.2 * Math.sqrt(a ** 2 + b ** 2);

      setStyle({
        transform: `rotate(${deg}deg) scale(0.2)`,
        top: `${y - 50}px`,
        left: `${x - 50}px`,
        transition: `top ${duration}ms cubic-bezier(.61,1.61,1,1), left ${duration}ms ease-out, transform ${duration}ms ease-out`,
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
