import './App.css';
import React from 'react';
import DashBody from './components/DashBody';
import Sider from './components/Sider';
import { BrowserRouter as Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Sider />
      <DashBody/>
       {/* <BrowserRouter basename="/app"> */}
         {/* <Routes>
           <Route path="/" element={<Header />} />
           <Route path="/" element={<Sider />} />
         </Routes> */}
       {/* </BrowserRouter> */}
   </div>
  );
}

export default App;
