import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from "react-bootstrap"
import Header from "../components/header"
//scss
import "../styles/styles.scss"


const IndexPage = () => (
  

  <div>

    <Container>
      <Row>
        <Col>
        <Header></Header>
    <h1>Hi from the home page</h1>
    <button className="btn btn-primary" type="button">Button</button>
    <Col>
    <Link to="/page-2">Go to page 2</Link>
        </Col>
        </Col>
      </Row>
    </Container>
  </div>
  
  
  
  )

export default IndexPage
