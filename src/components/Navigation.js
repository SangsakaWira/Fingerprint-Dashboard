import React from 'react'
import {Component} from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

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
                    <Nav.Link active={this.props.active === "record" ? true:false}><Link to="/record" activeClassName="current">All Records</Link></Nav.Link>
                    <Nav.Link active={this.props.active === "users" ? true:false}><Link to="/users">All Users</Link></Nav.Link>
                    {/* <Nav.Link active={this.props.active === "weapons" ? true:false}><Link to="/weapons">All Waepons</Link></Nav.Link> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button variant="outline-danger" href="/login">Logout</Button>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Navigation