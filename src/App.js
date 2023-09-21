import './App.css';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';

function App() {
    return (
        <div className="App">
            <Header />
            <section className='main'>
                <CharCards />
                <CharAbout />
            </section>

        </div>
    );
}

export default App;
