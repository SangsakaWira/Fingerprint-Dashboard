import React from 'react';
import { Form, Button,Container} from 'react-bootstrap'

class Register extends React.Component {

    handleSubmit(){
        alert("Register Success") 
    }

   render(){
    return (
        <Container>
            <Form onClick={this.handleSubmit}>
                <h1 style={{textAlign:"center",margin:"20px"}}>Fingerprint Weapon Storage System</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="confirm_password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-muted">
                    Already have an account? <a href="/login">Login</a>
            </Form.Text>
        </Form>
    </Container>
      );
   }
  }

  export default Register;