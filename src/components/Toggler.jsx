import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import "./context/Theme.css"

const Toggler = ()=>{
const {theme , setTheme} = useContext(ThemeContext)

return (
    <>
     <h3>current theme: {theme}</h3>
     <button className="theme-button" onClick={()=>setTheme(theme === "light" ? "dark": "light")}>Change theme</button>
    </>
)
}
export default Toggler