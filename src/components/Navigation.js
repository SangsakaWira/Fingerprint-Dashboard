import React from 'react'
import {Component} from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap';

class Navigation extends Component{

    constructor(props){
        super(props)
        this.state = {
            record:false,
            user:false,
            weapon:false
        }
    }

    render(){
        return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weapons Records</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/record" active={this.props.active === "record" ? true:false}>All Records</Nav.Link>
                    <Nav.Link href="/users" active={this.props.active === "users" ? true:false}>All Users</Nav.Link>
                    <Nav.Link href="/weapons" active={this.props.active === "weapons" ? true:false}>All Waepons</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button variant="outline-danger">Logout</Button>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Navigation