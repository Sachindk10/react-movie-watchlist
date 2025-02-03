import React, { useState } from "react";
import { Form, Button, Container, Row, Col,} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const nav = useNavigate();
  const NavigateToRegister = () => {
    nav("/register");
  }  
  
   
  return (
    <div>
        <Container className="mt-5 w-50">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Login</h3>
          
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
            <p className="mt-1">Not Registered</p>
            <Button variant="success" className="w-100" onClick={NavigateToRegister}>Register Now</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default LoginPage;