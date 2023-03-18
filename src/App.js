import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Propos from './components/Propos/Propos';
import Solution from './components/Solution/Solution';
import Footer from './components/Footer/Footer'
import Others from './components/Others/Others'
import Formulaire from './components/Formulaire/Formulaire';


function App() {
  return (
    <
      div className="App">
      <Header/>
      <Hero/>
      <Propos/>
      <Solution/>
      <Others/>
      <Formulaire/>
      <Footer/>
    </div>
  );
}

export default App;
