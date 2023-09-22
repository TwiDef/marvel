import './App.css';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';
import bgImg from './resources/img/bg.png'
import Button from './components/button/Button';

function App() {
    return (
        <div className="App">
            <img className='bgImg' src={bgImg} alt="" />
            <Header />
            <section className='main'>
                <CharCards />
                <CharAbout />
            </section>
            <div className='load-btn'><Button width={170} color="#9F0013" text="LOAD MORE" /></div>
        </div>
    );
}

export default App;
