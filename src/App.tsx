import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Header from './components/Header'
// import Footer from './components/Footer';
import Child from './components/Child';
import WorkExp from './components/WorkExp'


function App() {
  return (
    <>



    {/* <Header/> */}
      
      <Routes>
      <Route path="/" element={  <Child/>   } />
      <Route path='/home' element={<Child/>}/>
      <Route path='/workexp' element={<WorkExp/>}/>

        {/* <Route path = {"/final-list/profile/:id"} element={<FinalViewprofiles/>}/> */}
        {/* <Route path='*' element={<NotFound/>}/> */}
 
      </Routes>
      
        {/* <Footer/> */}
    </>
  );
}

export default App;
