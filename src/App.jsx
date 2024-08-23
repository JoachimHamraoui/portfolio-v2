import Navigation from './components/Navigation';
import BlurCircle from './components/BlurCircle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <BlurCircle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
