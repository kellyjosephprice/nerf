import { useEffect, useState, useRef } from "react";

const Dart = ({ x = 0, y = 0 }) => {
  const [style, setStyle] = useState({});
  const ref = useRef();

  useEffect(() => {
    const deg = Math.floor(Math.random() * 360) - 180;
    const a = Math.abs(x - window.innerWidth / 2);
    const b = Math.abs(window.innerHeight - y);
    const duration = 0.4 * (400 + Math.sqrt(a ** 2 + b ** 2));
    const height = 50 + Math.floor(Math.random() * 100);
    let startDeg = (Math.atan(a / b) * 180) / Math.PI;

    if (x < window.innerWidth / 2) {
      startDeg *= -1;
    }

    const newStyle = {
      transform: `rotate(${deg}deg) scale(0.2)`,
      top: `${y - 50}px`,
      left: `${x - 50}px`,
      height: `${height}px`,
      transition: `top ${duration}ms cubic-bezier(0,2,1,1), left ${duration}ms ease-out, transform ${duration}ms ease-out, height ${duration}ms cubic-bezier(0,2,1,1)`,
    };

    window.requestAnimationFrame(() => {
      setStyle({ transform: `rotate(${startDeg}deg)` });

      window.requestAnimationFrame(() => {
        setStyle(newStyle);
      });
    });
  }, [x, y]);

  let played = false;
  useEffect(() => {
    const cb = () => {
      if (played) return;
      played = true;

      const nerf = new Audio("/nerf.mp3");
      nerf.volume = 0.1;
      nerf.play();
    };
    ref.current.addEventListener("transitionend", cb);
  }, []);

  return (
    <div className="Dart" style={style} ref={ref}>
      <div className="Head" />
      <div className="Body" />
      <div className="Butt" />
    </div>
  );
};

export default Dart;
