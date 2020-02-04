import React from 'react';
import {Container, Table, Form, FormControl} from 'react-bootstrap';
import axios from 'axios'
import Navigation from '../components/Navigation'

class Record extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[],
            users:[]
        }
        this.onChangeUser = this.onChangeUser.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
    }

    async componentDidMount(){
        let data = await axios.get("http://localhost:7500/record/getAllRecords").then(response=>{
            // console.log(response.data.data)
            return response.data.data
        })

        let user = await axios.get("http://localhost:7500/user/getAllUsers").then(response=>{
            // console.log(response.data.data)
            return response.data.data
        })

        this.setState({
            data:data,
            users:user
        })
    }

    async onChangeUser(e){
        let data;
        if(e.target.value === "2"){
            data = await axios.get("http://localhost:7500/record/getAllRecords").then(response=>{
                console.log(response.data.data)
                return response.data.data
            })
        }else{
            data = await axios.get("http://localhost:7500/record/getRecordByUserId/"+e.target.value).then(response=>{
            return response.data.data
        })
        }
        console.log(data)
        this.setState({
            data:data
        })
    }

    async onChangeStatus(e){
        let data;
        if(e.target.value === "2"){
            data = await axios.get("http://localhost:7500/record/getAllRecords").then(response=>{
                console.log(response.data.data)
                return response.data.data
            })
        }
        else{
            data = await axios.get("http://localhost:7500/record/getRecordByStatus/"+e.target.value).then(response=>{
            return response.data.data
        })
        console.log(data)
        }
        
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
              <Form.Label style={{marginRight:"10px"}}>Sort By User Id: </Form.Label>
            <FormControl as="select" placeholder="Sort By" className=" mr-sm-2" name="opsi" onChange={this.onChangeUser}>
            <option value ="2">Semua</option>
                {
                    this.state.users.map(({user_id})=>{
                        return(
                            <option value={user_id}>{user_id}</option>
                        )
                    })
                }
            </FormControl>
        </Form>
        <Form inline style={{marginTop:"20px",marginBottom:"20px",width:"100%"}} >
        <Form.Label style={{marginRight:"10px"}}>Sort By Status: </Form.Label>
            <FormControl as="select" placeholder="Sort By" className=" mr-sm-2" name="opsi" onChange={this.onChangeStatus}>
                <option value ="2">Semua</option>
                <option  value ="1" >Senjata Masuk</option>
                <option  value ="0" >Senjata Keluar</option>
            </FormControl>
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
