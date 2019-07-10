import React, {Component} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import cookies from 'universal-cookie'
import {keepLogin} from './action/index'


import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

const cookie = new cookies()



class App extends Component {

  componentDidMount() {
    
    this.props.keepLogin(cookie.get("masihLogin"), cookie.get("idLogin"))

  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          

          <Footer/>
        </div>
    </BrowserRouter>
    )
  }
}

export default connect (null, {keepLogin}) (App)
