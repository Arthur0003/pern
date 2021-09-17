import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter }       from 'react-router-dom';

function App() {
    const [ state, setState ] = useState('');

    useEffect(() => {
        // fetch('http://jsonplaceholder.typicode.com/todos/1', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: 'aaa@mail.ru',
        //         password: 'zzzzzzz'
        //     })
        // })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        console.log('useEffected');
    }, []);

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
