import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation';
import AllBooks from './components/Books';
import Category from './components/Category';
import NotSeen from './components/NotSeen';

function App() {
  return (
    <Router>
      <div className="bookApp">
        <div className="nav">
          <NavBar />
        </div>
        <section className="container">
          <Routes>
            <Route path="/" exact element={<AllBooks />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/*" element={<NotSeen />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
