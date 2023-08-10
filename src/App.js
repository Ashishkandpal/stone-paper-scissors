import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameScreenPage from './pages/GameScreenPage';
import LandingPage from './pages/LandingPage';


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game-screen' element={<GameScreenPage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
