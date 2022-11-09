const ActionButton = ({ title, func, classname }) => {

  return (
    <button className={classname} onClick={func} > {title}</ button>
  )
}

export default ActionButton