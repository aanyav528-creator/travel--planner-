import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import PlanTrip from './pages/PlanTrip';
import Itineraries from './pages/Itineraries';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
