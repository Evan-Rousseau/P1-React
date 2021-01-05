import React, { useState } from 'react';
import Time from './Time';


function Click() {

    const [count, setCount] = useState(0)

    return (
    <div className="App">
        <header className="App-header">
            <Time></Time>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me Up</button>
            <button onClick={() => {if(count > 0 ) setCount(count - 1) }}>Click Me Down</button>
        </header>
      </div>
    );
}

export default Click;