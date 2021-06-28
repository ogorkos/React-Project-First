import React from "react";
import './App.css';
import Navbar from './pages/common/Navbar'
import Footer from './pages/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MyCards from './pages/MyCards'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (  
    <div >
      <ToastContainer />
      <Navbar />      
      <Switch>
          <Route exact path='/home' component={() => <Home />}/>            
          <Route exact path='/about' component={() => <About />}/>            
          <Route exact path='/my-cards' component={() => <MyCards />}/>            
          <Route exact path='/signin' component={() => <Login />}/>            
          <Route exact path='/signup' component={() => <Registration />}/>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
