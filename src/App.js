import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';


function App() {
  return (
    <div >
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Hello Adarsh</NavbarBrand>
        <Menu></Menu>
      </div>
    </Navbar>
    </div>
  );
}

export default App;
