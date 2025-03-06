
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Product/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
