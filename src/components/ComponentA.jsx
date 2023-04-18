import ComponentB from "./ComponetnB";
import { useState } from "react";
import './ComponentA.scss';

const ComponentA  = (props) => {
    const [count, setCount] = useState(5);
    const [color, setColor] = useState(false);
     
    const handleCount = () => {
        setCount(count + 5)
    }

    const handleCountMinus = () => {
        setCount(count -1)
    }
    const handleChange = () => {
        setColor(!color)
    }

    console.log(props);
       return (
        <div className={color ? 'componentA-dark active' : 'componentA-dark'}>
            <span>My counter</span>
            <h2>
                {count}
            </h2>
            <button onClick={handleCount}>Click</button>
            <button onClick={handleCountMinus}>Minus</button>
            <button onClick={handleChange}>Change color</button>
            <ComponentB lastName = {props.lastName}/>
        </div> 
        
       )
}

export default ComponentA;