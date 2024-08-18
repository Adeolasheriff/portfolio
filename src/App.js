import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './components/portfolio/portfolio';
import Contact from './pages/contact';
import Index from './pages';


function App() {
  return (
   <div> 
     <BrowserRouter>
       <Routes>
        <Route index element={<Home/>}>
        </Route>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Index' element={<Index/>} />
       </Routes>
      </BrowserRouter>
    
   </div>
  );
}

export default App;
