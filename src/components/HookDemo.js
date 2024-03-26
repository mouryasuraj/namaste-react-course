import { useEffect, useMemo, useState } from "react";
import { findNthPrime } from "../Utils/constant";


const HookDemo = () => {
    const [value, setValue] = useState(0)
    const [theme, setTheme] = useState(true)

    let inputContainer;
    useEffect(() => {
        inputContainer = document.querySelector('.demoInput')
    })
    console.log('render');
    const prime = useMemo(() => findNthPrime(value), [value])
    const handleTheme = () => {
        if (theme) {
            inputContainer.style.backgroundColor = 'black'
            setTheme(false)
        } else {
            inputContainer.style.backgroundColor = 'white'
            setTheme(true)
        }
    }
    return (
        <div>
            <div className="demoInput">
                <input type="number" placeholder="enter..." onChange={(e) => setValue(e.target.value)} />
                <h1 className="prime">Nth Prime: {prime}</h1>
            </div>
            <button onClick={handleTheme}>Theme</button>
        </div>
    )
}

export default HookDemo
