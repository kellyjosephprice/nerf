import { useEffect, useState } from 'react'

const Placeholder = ({ done }) => {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    if (!done || !display)  return

    setDisplay(false)
  }, [display, done])

  return <div className={`Placeholder ${display ? '' : 'Placholder-done'}`}>
    click or hold
  </div>
}

export default Placeholder
