import { useState } from "react";
import './new-input.css'
  function NInput(){
    const [value, setValue] = useState(0);
    const [error, setError] = useState(false)

 
const changeValue = (value) => {
    setValue(value)
    setError(false)
}
 const onMinus = () => changeValue(value - 1)
 const onPlus = () => changeValue(value + 1)

   const onInputChange = (event) => {
    const value = Number(event.target.value.trim())
     
      if(isNaN(value)) {
        return setError(true)
      }
       setError(false)
       setValue(value)
   }
     return (
        <div className="test">
            <button onClick={onMinus}>-</button>
            <input type="text" value={value} onChange={onInputChange}/>
            <button onClick={onPlus}>+</button>
              
              { error ? <div>only numbers</div>: null}

        </div>
     )
  }
   export default NInput;
     