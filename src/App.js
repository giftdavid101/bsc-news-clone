import React from 'react';
import './App.css';
import Header from './components/compounds/header';
import HomePage from './pages/homepage';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App ">
            <BrowserRouter>
                <Header />
                <HomePage />
            </BrowserRouter>
        </div>
    );
}

export default App;
