import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Rates from './components/Rates/Rates';
import Navigation from './components/Navigation/Navigation';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

function App() {
    const [tab, setTab] = useState('main');

    return (
        <>
            <Header />
            <main>
                <h1>Виртуальный хостинг для сайта</h1>
                <Navigation active={tab} onChange={current => setTab(current)}/>
                {tab === 'main' && (
                    <>
                        <Services />
                        <Rates />
                    </>
                )}
                {tab === 'feedback' && <Feedback />}
            </main>
        </>
    );
}

export default App;
