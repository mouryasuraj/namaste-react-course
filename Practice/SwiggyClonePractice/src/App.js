import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const rootDOM = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

rootDOM.render(<App />)

