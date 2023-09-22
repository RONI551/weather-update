
import './top.css'
function Top() {
  return (
    <div>
    <div className="top-container">

    <div className="f-item">
   
    <select name="" className='w1-input'>
    <option value="w1">w1</option>
    <option value="w2">w2</option>
    <option value="w3">w3</option>
    </select>
    <button className='top-button'>2HR</button>
    <button className='top-button'>DELIVERY</button>
    <button className='top-button'>DAY</button>
    </div>

    <div className="s-item">
    <input  type="radio" name='unite'className='radio' value='units'/>
    <label htmlFor="unite" className='unit-label'>Units</label>
    <input  type="radio" className='radio'  name='dolar' value="$" />
    <label htmlFor="dolar">$</label>
    </div>
   <div className="t-item">
    <p> <b>sales-period</b> : 35 days (12/26/2021- <br /> 1/30/2022) </p>
   </div>
    </div>
    
    </div>
  )
}

export default Top