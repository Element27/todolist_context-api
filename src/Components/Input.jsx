
const Input = ({ title, setTitle }) => {





  return (
    <input
      type="text"
      className="maininput"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder='wetin you wan do❔'
    />
  )
}

export default Input