import { useState } from "react"
function ColorPicker(){
let [color,setcolor] = useState('#ffffff');

return(
<>
<div className="color-container">
<h1>Color Picker</h1>
    <label htmlFor="pick">pick a color</label>
    <input onChange={(e)=>{
        setcolor(e.target.value)
    }} id="pick" type="color" value={color} />
    <p className="choosed-color" style={{backgroundColor: color}}>color : {color}</p>
</div>
</>
)
}
export default ColorPicker