import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark");
        }   else {
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <button
         onClick={toggleTheme}
         className={cn("fixed ax-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hideen"
         )}
         >

        {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300"/>
    ) : (
    <Moon className="h-6 w-6text-blue-300"/>)}</button>
    );
};