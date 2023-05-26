import './App.css';
import { Routes,Route } from 'react-router';
import Login from './pages/Login';
import Home from "./pages/Home";
import Register from './pages/Register'
import Profile from './pages/Profile';
import Birthday from "./pages/Birthday"
import PrivateRoutes from './routes/PrivateRoutes';
import { Divider } from 'semantic-ui-react';
import PublicLayout from './pages/PublicLayout';
import Family from './pages/Family'
import Education from './pages/Education'
import Travel from './pages/Travel'
import BestMoments from './pages/BestMoments'
import Work from './pages/Work';
import Others from './pages/Others';
import { useState } from 'react';
function App() {
  const [category,setCategory]=useState("")
  return (
    <div class="App">
    <Routes >
      <Route path='/' element={<PublicLayout/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile/:id' element={
      <PrivateRoutes>
      <Profile/>
      </PrivateRoutes>
      }/>
      <Route  path='/birthday/:id' element={<Birthday/>}/>
      <Route  path='/family/:id' element={<Family/>}/>
      <Route  path='/education/:id' element={<Education/>} category={category}/>
      <Route  path='/travel/:id' element={<Travel/>}/>
      <Route  path='/bestmoments/:id' element={<BestMoments/>}/>
      <Route  path='/work/:id' element={<Work/>}/>
      <Route  path='/others/:id' element={<Others/>}/>


    </Routes>
    </div>
  );
}

export default App;
