import React from 'react';
import {Container, Table, Form, Button, FormControl} from 'react-bootstrap';
import axios from 'axios'
import Navigation from '../components/Navigation'

class Record extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[],
            users:[{user_id:"4Teknik-12"},{user_id:"4Teknik-14"}]
        }
    }

    async componentDidMount(){
        let data = await axios.get("http://localhost:7500/record/getAllRecords").then(response=>{
            console.log(response.data.data)
            return response.data.data
        })

        this.setState({
            data:data
        })
    }

    async componentDidUpdate(){
        let data = await axios.get("http://localhost:7500/record/getAllRecords").then(response=>{
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
        <Navigation active="record"></Navigation>
          <Container style={{marginTop:"20px"}}>
          <Form inline style={{marginTop:"20px",marginBottom:"20px",width:"100%"}} >
            <FormControl as="select" placeholder="Sort By" className=" mr-sm-2">
                {
                    this.state.users.map(({user_id})=>{
                        return(
                            <option>{user_id}</option>
                        )
                    })
                }
            </FormControl>
            <Button type="submit">Search</Button>
        </Form>
            <Table striped bordered hover>
                <thead>
                    <tr style={{textAlign:"center"}}>
                    <th>Nomor</th>
                    <th>Status</th>
                    <th>Tanggal</th>
                    <th>User Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(({status,tanggal,user_id})=>{
                        index+=1;
                        if(!status){
                            return(
                                <tr style={{textAlign:"center"}}>
                                <td>{index}</td>
                                <td style={{color:"red"}}>Senjata Keluar</td>
                                <td>{tanggal}</td>
                                <td>{user_id}</td>
                            </tr>
                            )
                        }else{
                            return(
                                <tr style={{textAlign:"center"}}>
                                <td>{index}</td>
                                <td  style={{color:"green"}}>Senjata Masuk</td>
                                <td>{tanggal}</td>
                                <td>{user_id}</td>
                            </tr>
                            )
                        }
                    })
                }
                </tbody>
                </Table>
          </Container>
        </div>
      );
   }
  }

export default Record;
