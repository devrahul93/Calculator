import '../index.css'
const Toggler = () => {
  return (
    <>
      <div className="switch-toggle switch-3 switch-candy">
        <input id="on" name="state-d" type="radio" defaultChecked="" />
        <label htmlFor="on" className="one"></label>

        <input id="na" name="state-d" type="radio" defaultChecked="checked" />
        <label htmlFor="na" className="two"></label>

        <input id="off" name="state-d" type="radio" />
        <label htmlFor="off" className="three"></label>
      </div>
    </>
  )
}

export default Toggler
