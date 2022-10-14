const Placeholder = ({ done }) => {
  console.log({ done })
  return <div className={`Placeholder ${done ? 'Placholder-done' : ''}`}>
    click or hold
  </div>
}

export default Placeholder
