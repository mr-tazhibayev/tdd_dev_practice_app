import React, { useState } from 'react'

export interface CounterProps {
    initialValue?: number;
    initialTick?: number;
}

const Counter: React.FC<CounterProps> = (props) => {
    const [initialValue, setInitialValue] = useState<number>(props.initialValue || 0);
    const [tick] = useState<number>(props.initialTick||1);
    const minMax = (value: number): number => Math.max(0, Math.min(value, value + tick));

    return <>
         <h3>{initialValue}</h3>

        <button onClick={() => setInitialValue(minMax(initialValue - tick))}>
            Уменьшить
        </button>

        <button onClick={()=>setInitialValue(minMax(initialValue+tick))}>
            Увеличить
        </button>

    </>
}

export default Counter