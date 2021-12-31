import '../index.css'
const Toggler = () => {
  return (
    <>
      <div className="input">
        <input id="theme1" type="radio" name="theme" value="0" defaultChecked />
        <label htmlFor="theme1">1</label>

        <input id="theme2" type="radio" value="1" name="theme" />
        <label htmlFor="theme2">2</label>

        <input id="theme3" type="radio" value="2" name="theme" />
        <label htmlFor="theme3">3</label>
      </div>
    </>
  )
}

export default Toggler
