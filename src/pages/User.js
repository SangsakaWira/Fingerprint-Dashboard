import React from 'react';
import {Container, Table} from 'react-bootstrap';
import axios from 'axios'
import Navigation from '../components/Navigation'

class User extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    async componentDidMount(){
        let data = await axios.get("http://localhost:7500/user/getAllUsers").then(response=>{
            console.log(response.data.data)
            return response.data.data
        })

        this.setState({
            data:data
        })
    }

   render(){
    let index = 0;
    return (
        <div className="App">
            <Navigation active="users"></Navigation>
          <Container style={{marginTop:"20px"}}>
            <Table striped bordered hover>
                <thead>
                    <tr style={{textAlign:"center"}}>
                    <th>Nomor</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>User Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(({username,email,user_id})=>{
                        index+=1;
                        return(
                            <tr style={{textAlign:"center"}}>
                                <td>{index}</td>
                                <td >{username}</td>
                                <td>{email}</td>
                                <td>{user_id}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                </Table>
          </Container>
        </div>
      );
   }
  }

export default User;
