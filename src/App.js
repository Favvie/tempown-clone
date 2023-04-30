import './App.css';
import Header from './components/Header';
// import EnterprisePage from './components/EnterprisePage';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <EnterprisePage /> */}
      <Footer />
    </div>
  );
}

export default App;
