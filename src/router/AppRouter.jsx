import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Detail from '../pages/Detail';


const AppRouter = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="detail" element={<Detail />} />
    
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;