import './App.css';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

import { useSelector } from 'react-redux'

function App() {

  const dark = useSelector((state) => state.dark.value)

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
