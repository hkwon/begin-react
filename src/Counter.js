import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const style = {
        width: 200,
        height: 100,
        margin: '0 auto'
    }
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        console.log('+1');
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
        console.log('-1');
    }
    return (
        <div style={style}>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;