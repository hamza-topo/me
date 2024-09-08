import React, { useEffect, useState } from 'react';
import { useMediaQuery } from "react-responsive";

export default function DarkToggle() {
    const DARK_CLASS = "dark";
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (prefersDark) => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        const appElement = document.querySelector('.App');
        if (appElement) {
            if (isDark) {
                document.body.classList.add(DARK_CLASS); // Adds dark class to App element
            } else {
                document.body.classList.remove(DARK_CLASS); // Removes dark class from App element
            }
            console.log(document.body)
        }
    }, [isDark]);

    return (
        <div className='footer'>
            <i
                className="fa-sharp-duotone fa-solid fa-lightbulb fa-lg"
                onClick={() => setIsDark(!isDark)} // Toggle isDark on click
            ></i>
        </div>
    );
}
