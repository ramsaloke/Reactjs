import { useState } from "react";


const CounterStep = ()=>{
    const [counter , setCounter] = useState(0);
    const [step , setStep] = useState("")

    const handleCount = ()=>{
        setCounter((prev)=>{
            return prev + step
        })
    }
    const handleStepChange = (e)=>{
        const value = e.target.value;
        setStep(value === "" || value <=0 ? "" : Number(value))
    }

    const handleReset = ()=>{
        setCounter(0);
        setStep("")
    }
    return(
        <>
        <h1>Count : {counter}</h1>
        <div>
            <label htmlFor="stepInput">stepValue:</label>
            <input type="number" 
            value={step}
            id="stepInput"
            min="1"
            onChange={handleStepChange} />
        </div>
        <button onClick={handleCount}>increment</button>
        <button onClick={handleReset}> Reset</button>
        </>
    )
}
export default CounterStep;