import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme ,setTheme] = useState ('light');

    useEffect(()=>{
       document.body.classList.remove('light-theme',);

       document.body.classList.add(theme === "dark" ? 'dark-theme':'light-theme')
    },[theme])

    return (
        <ThemeContext.Provider value={{theme , setTheme}} >
            {children}
        </ThemeContext.Provider>
    ) 
}