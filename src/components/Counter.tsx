import React, {useState} from 'react';
import cl from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={cl.btn}>+1</button>
        </div>
    );
};

export default Counter;
