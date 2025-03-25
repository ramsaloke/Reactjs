import { useState } from "react"
import './TogglerText.css'

const ToggleText = ()=>{

    const [toggle , setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <>
     
        <button className="btn" onClick={handleToggle}>{`${toggle ? "Hide Text": "Show Text"}`}</button>
        {toggle && ( <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nam. Ullam sint, voluptas unde maxime architecto ducimus labore delectus praesentium sequi nemo dolor aspernatur iure natus expedita, porro in quam?</p>)}
        </>
    )
}

export default ToggleText