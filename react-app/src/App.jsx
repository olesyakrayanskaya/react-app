import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Rates from './components/Rates/Rates';
import Navigation from './components/Navigation/Navigation';
import Feedback from './components/Feedback/Feedback';
import Reviews from './components/Reviews/Reviews';
import { useState } from 'react';

function App() {
    const [tab, setTab] = useState('main');

    return (
        <>
            <Header />
            <main>
                <h1 className='Title'>Виртуальный хостинг для сайта</h1>
                <Navigation active={tab} onChange={current => setTab(current)}/>
                {tab === 'main' && (
                    <>
                        <Services />
                        <Rates />
                    </>
                )}
                {tab === 'feedback' && <Feedback />}
                {tab === 'reviews' && <Reviews />}
            </main>
        </>
    );
}

export default App;
