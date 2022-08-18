import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
    </>
  );
}

export default App;
