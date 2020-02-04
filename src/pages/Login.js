import React from 'react';
import {Form, Button, Container,Alert} from 'react-bootstrap'
import axios from 'axios'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            status:"",
            variant:"",
            message:""
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        let data = await axios.post("http://localhost:7500/user/login",{
            username:this.state.username,
            password:this.state.password
        }).then(response=>{
            return response.data
        })
        console.log(data)
        if(data.msg === "Wrong Password"){
            this.setState({
                status:"0",
                variant:"danger",
                message:"Wrong Password!"
            })
        }else if(data.msg === "No user found"){
            this.setState({
                status:"1",
                variant:"danger",
                message:"No User Found!"
            })
        }else{

        }
    }

    handleChangeUsername(e){
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }

    handleChangePassword(e){
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            password:e.target.value
        })
    }

   render(){

    let AlertNew = () =>{
        console.log(this.state.status)
        if(this.state.status === "0"){
            return(
                <Alert variant="danger" style={{marginTop:"10px"}}>
                    Wrong Password!
                </Alert>
            )
        }else if(this.state.status === "1"){
           return(
                <Alert variant="danger" style={{marginTop:"10px"}}>
                    No User Found!
                </Alert>
           )
        }else{
            return <div></div>
        }
    }

    return (
        <Container>
             <Form onSubmit={this.handleSubmit}>
                 <h1 style={{textAlign:"center",margin:"20px"}}>Fingerprint Weapon Storage System</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={this.handleChangeUsername} />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                     Don't have an account? <a href="/register">Register</a>
                </Form.Text>
            </Form>
            <AlertNew></AlertNew>
        </Container>
      );
   }
  }

  export default Login;

