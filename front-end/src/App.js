import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ServiceIndex from './Components/service/index'
import Edit from './Components/service/edit'
import AddService from './Components/service/addService';


class App extends Component {

  render(){
    return(
      
          <BrowserRouter>
          <div>
            <Link to= '/admin'>Home</Link>

            <Route path='/admin' component={ServiceIndex}/>
            <Route path='/admin/edit' component={Edit} exact/>
            <Route path='/admin/add' component={AddService}/>
          </div>  
          </BrowserRouter> 
      
    )
  }
}

export default App;
