import React, { useState } from 'react';
import Home from './pages/Home';
import Order from './pages/Order';
import Footer from './components/common/Footer';

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      {page === "home" && <Home setPage={setPage} />}
      {page === "order" && <Order setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
