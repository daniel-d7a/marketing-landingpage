import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/Aboutus';
import Newsletter from './Pages/Newsletter';
import Clients from './Pages/OurClients';
import Services from './Pages/Services';
import WhoAreWe from './Pages/WhoAreWe';
import Team from './Pages/Team';

function App() {

  return (
    <div className="App bg-white">
      <Navbar />
      <About />
      <Services />
      <WhoAreWe />
      <Team/>
      <Clients/>
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App
