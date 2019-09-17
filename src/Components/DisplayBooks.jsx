import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
// import AllReviews from "./AllReviews";
// import image from "../Assets/Spotify_Logo.png";

class DisplayBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  render() {
    return (
      <>
        <Container className = "fluid">
          <Row >
  
            {this.state.books.map(book => (
                    <Col md="3" id="cardcol">
                  <Card key={book.asin} className = "align-items-center" id="wholeCard">
                    <CardImg 
                      fluid
                      className = "fluid"
                      top
                      src={book.img}
                      alt="image"
                    />
                    <CardBody className = "cardBody">
                      <CardTitle className="textTitle">{book.title}</CardTitle>
                      <CardSubtitle >Genre: {book.category} / €{book.price}</CardSubtitle>
                      {/* <CardText ><span>€{book.price}</span></CardText> */}
                    </CardBody>
                    {/* <Link
                     to={"products/"+ product.id + "/reviews"}
                     className="titleLink"> */}
                    <Button className="commBtn">Comments</Button>                
                   {/* </Link> */}
                   </Card>
                   </Col>

            ))}
 
          </Row>
          </Container>
      </>
    );
  }


  componentDidMount = async () => {
    var resp = await fetch("http://localhost:3000/books");
    var json = await resp.json();
    this.setState({ books: json });

  };


  //<Button onClick={() =><AllReviews/> }>Reviews</Button>  


}

export default DisplayBooks;
