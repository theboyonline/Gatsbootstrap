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
        <Header>
          <h1>MENU</h1>
        </Header>
    <h1>Hi from the home page</h1>
    <button className="btn btn-primary" type="button">Button</button>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button className="btn btn-light" type="button">Button</button>
    <Col>
    <Link to="/page-2">Go tto page 2</Link>
        </Col>
        </Col>
      </Row>
    </Container>
  </div>

  )

export default IndexPage
