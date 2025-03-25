
import { useState } from "react";

const UseState = ()=>{

    const [user , setUser] = useState({
        name:"ram",
        age: 25,
    })

    const handleAge = ()=> {
        setUser((prevUser)=> {
            return {...prevUser , age : user.age + 1}
        })
    }

    const changeName = ()=>{
        setUser((prevUser) => {
            return {...prevUser , name: user.name === "ram"? "shyam": "ram"}
        }
            
        )
        
    }
    return (
        <>
        <h3>Name: {user.name}</h3>
        <button onClick={changeName}>change Name</button>
        <h3>Age: {user.age}</h3>
        <button onClick={handleAge}>Increase Age</button>
        </>
    )
} 

export default UseState