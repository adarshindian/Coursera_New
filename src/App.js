
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import { Component } from 'react';
class App extends Component{


  
  render(){
    return (
      <div >
    
     <Main/>
      </div>
    );
  }
}




export default App;
