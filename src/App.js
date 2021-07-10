import React, { Component } from "react";
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
import userService from "./services/userService";
import Logout from "./pages/common/Logout"
import BizSingup from "./pages/BizSingup"
import CreateCard from "./components/CreateCard"
import ProtectedRoute from "./pages/common/ProtectedRoute.js"
import EditCard from './components/EditCard'
import DeleteCard from './components/DeleteCard'
import ScrollToTop from './pages/common/ScrollToTop'
import EditUser from './components/EditUser'

class App extends Component {
  state = {}

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({user})
  }

  render() {
    const {user} = this.state
    return (  
      <div className="d-flex flex-column minimheight" >
        <ToastContainer />

        <Navbar user={user} />  
        <main>
          <Switch>

              <ProtectedRoute path="/my-cards/edit/:id" component={EditCard} biz={true}/>
              <ProtectedRoute path="/my-cards/delete/:id" component={DeleteCard} biz={true}/>
              <ProtectedRoute path="/my-cards" component={MyCards} biz={true}/>
              <ProtectedRoute path="/create-card" component={CreateCard} biz={true}/>
              {/* <ProtectedRoute path="/edit-user" component={EditUser} /> */}
              
              <Route path='/about' component={() => <About />}/>            
              <Route path='/edit-user' component={() => <EditUser />}/>            
              <Route path='/signin' component={() => <Login />}/>            
              <Route path='/signup' component={() => <Registration />}/>  
              <Route path='/logout' component={() => <Logout />}/>            
              <Route path='/biz-signup' component={() => <BizSingup />}/>            
              <Route exact path='/' component={() => <Home />}/>            
          </Switch>
          <ScrollToTop/>
        </main>
        <footer className='mt-auto '>
        <Footer />
        </footer>
      </div>
    );  
  }
}

export default App;
