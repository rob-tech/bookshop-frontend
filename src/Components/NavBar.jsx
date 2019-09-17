import React, {Component} from 'react';
import Genre from "./Genre";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   Dropdown, DropdownItem, DropdownToggle, DropdownMenu
    } from 'reactstrap';
    import { Link } from "react-router-dom";

//imr => import react
//cc => create class

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          dropdownOpen: false,
          genre: null
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render() {
        return ( 
        <Navbar dark expand="md" className="AwesomeNav">
          <NavbarBrand className = "brand" href="#">Book Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Browse</NavLink>
              </NavItem>
              <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Genres
            </DropdownToggle>
            <DropdownMenu className="dropdown-class">
              <DropdownItem>
                <Link onClick={() =><Genre/>, this.getGenre("fantasy")} to="/genre/fantasy">fantasy</Link>
              </DropdownItem>
              <DropdownItem>
                <Link onClick={() =><Genre/>, this.getGenre("horror")} to="/genre/horror">horror</Link>
              </DropdownItem>
              <DropdownItem>
                <Link onClick={() =><Genre/>, this.getGenre()} to="/genre/romance">romance</Link>
              </DropdownItem>
              <DropdownItem>
                <Link onClick={() =><Genre/>, this.getGenre()} to="/genre/history">history</Link>
              </DropdownItem>
              <DropdownItem>
                <Link  onClick={() =><Genre/>, this.getGenre()} to="/genre/scifi">scifi</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }


  getGenre = genre => {
    var res = fetch("http://localhost:3000/books?category=" + genre);
    var genres = res.json
    this.setState({ genre: genres });
  }

}


export default NavBar;


