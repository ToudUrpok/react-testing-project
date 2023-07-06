/* import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState('');
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData('Async Component');
        }, 1000);
    }, []);

    return (
        <div>
            {toggle && <div data-testid='toggle-elem'>Controlled Component</div>}
            {data && <div style={{color: 'red'}}>{data}</div>}
            <h1>React Testing Library</h1>
            <button data-testid='toggle-btn' onClick={onClick}>Toggle</button>
            <h1 data-testid='input-value'>{value}</h1>
            <input 
                type='text' 
                placeholder='input value' 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
    );
}

export default App; */

import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <div>
            <Link to='/' data-testid='home-link' >Home</Link>
            <Link to='/about' data-testid='about-link' >About</Link>
            <Link to='/users' data-testid='users-link' >Users</Link>
            <AppRoutes />
        </div>
    );
};

export default App;