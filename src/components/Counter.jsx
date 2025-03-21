import { useState } from "react"

const Counter = ()=>{

 const [count , setCount] = useState(0)

 const handleCount = (value) => {
    setCount((prev)=> {
        return Math.max(prev + value, 0)
    })
 }

    return (
        <>
        <h3>Count: {count} </h3>
        <button onClick={()=>{return handleCount(1)}}  className="btn">Increment</button>
        <button onClick={()=> {return handleCount(-1)}} className="btn">Decrement</button>
        <button onClick={()=>setCount(0)} className="btn">Reset</button>
        </>
    )
}

export default Counter