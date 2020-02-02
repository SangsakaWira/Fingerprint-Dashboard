import React from 'react';
import {Form,Button, Container} from 'react-bootstrap'

class Login extends React.Component {

    handleSubmit(){
        
    }

   render(){
    return (
        <Container>
             <Form>
                 <h1 style={{textAlign:"center",margin:"20px"}}>Fingerprint Weapon Storage System</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                     Don't have an account? <a href="/register">Register</a>
                </Form.Text>
            </Form>
        </Container>
      );
   }
  }

  export default Login;

