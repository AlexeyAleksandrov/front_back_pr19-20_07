import { useState} from "react";
import {couch} from "globals";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter">
            <h2>Счётчик: {count}</h2>
            <button onClick={increment}>Плюс</button>
            <button onClick={decrement}>Минус</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    )
}

export default Counter;