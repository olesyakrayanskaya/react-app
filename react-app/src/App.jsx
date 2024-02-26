import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Rates from './components/Rates/Rates';

function App() {

    return (
        <div>
            <Header />
            <main>
                <h1>Виртуальный хостинг для сайта</h1>
                <Services />
                <Rates />
            </main>
        </div>
    );
}

export default App;
