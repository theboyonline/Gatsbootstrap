import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from "react-bootstrap"
import Header from "../components/header"
//scss
import "../styles/styles.scss"


const IndexPage = () => (
  

  <div>
    <Header></Header>
    <Container>
      <Row>
        <Col>
    <h1>Hi from the home page</h1>
    <Link to="/page-2">Go to page 2</Link>
        </Col>
      </Row>
    </Container>
  </div>
  
  
  
  )

export default IndexPage
