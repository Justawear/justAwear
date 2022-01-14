import React from "react";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
    return(
        <Card
    bg= "dark"
    text= "white"
    style={{ width: '100vw' }}
    className="mb-2"
  >
        <Card.Header>Header</Card.Header>
        <Card.Body>
        <img className="mainLogo" src="../images/large.png" alt="Just A Wear"/>
        </Card.Body>
      </Card>
      )
}

export default Home 