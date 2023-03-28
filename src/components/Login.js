import React from 'react';
import logo from '../images/logo.png';
import { Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <div className='login'>
            <Row>
                <Col lg={3}>
                    <img src={logo} className="logo" />
                </Col>
                <Col lg={6}>
                    <div className='loginholder'>
                        LOGIN
                        <h5>YOUR ACCOUNT</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                                <Form.Control type="email" className='' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Keep Me Logged In" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='w-100'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Login