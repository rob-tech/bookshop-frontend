import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
   Container
    } from 'reactstrap';
import NavBar from "./NavBar";
import Ftr from "./Ftr";
import DisplayBooks from "./DisplayBooks"
import Genre from "./Genre"


class Main extends Component {
  render() {
    return (
      <>
    
       <Router>
       <NavBar />
         

        <Route path="/books" component={DisplayBooks} />
        {/* <Route
          path="/books/:id/comments"
          exact
          component={AllComments}
        /> */}
           <Route path="/genre/:genre" component={Genre} />
            <Ftr />
    
      </Router>
    
      </>
    );
  }
}

export default Main;
