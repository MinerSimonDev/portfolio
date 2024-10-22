import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Donut from './components/Donut';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='section-1'>
        <Donut />
        <About />
      </div>
    </div>
  );
}

export default App;