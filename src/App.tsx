import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/main/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ <Home />}/>
      </Routes>
     
    </>
  );
}

export default App;
