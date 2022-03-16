import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import SinglePortfolio from './components/Portfolio/SinglePortfolio';
import LoginRegister from './pages/LoginRegister/LoginRegister';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login-register' element={<LoginRegister />} />
      <Route path='/portfolio-card-box-2' element={<Portfolio />} />
      <Route path='/single-portfolio' element={<SinglePortfolio />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog-details' element={<BlogDetails />} />
    </Routes>
    </>
  );
}

export default App;
