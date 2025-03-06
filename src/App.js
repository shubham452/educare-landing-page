
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Product from './components/Product';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
