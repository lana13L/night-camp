import { Moon , Sun } from "lucide-react"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
    const [isDarkMode,setisDarkmode] = useState(false)
    const toggleTheme = ()=>{
        if(isDarkMode){
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
         setisDarkmode(false)
        }else{
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
         setisDarkmode(true)
        }
    }
      useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setisDarkmode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
     setisDarkmode(false);
    }
  }, []);
  return (
    <button className=" p-2 transition-colors duration-300" onClick={toggleTheme}>{isDarkMode ? <Sun className="w-6 h-6 text-yellow-300"/> : <Moon className="w-6 h-6 text-blue-900"/>}</button>
  )
}

export default ThemeToggle