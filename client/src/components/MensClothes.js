import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

function MensClothes() {
    return(
        <Card style={{ width: '75rem' }}>
  <Card.Img variant="top" src="../images/clothes1.png" />
  <Card.Body>
    <Card.Title>Just A Wear Men's or Women's Clothes</Card.Title>
    <Card.Text>
    Fashion Style
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Day Wear</ListGroupItem>
    <ListGroupItem>Lunch Wear</ListGroupItem>
    <ListGroupItem>Dinner Wear</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    )
}
export default MensClothes 