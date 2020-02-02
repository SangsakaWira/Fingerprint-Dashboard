import React from 'react';
import {Container, Table} from 'react-bootstrap';
import axios from 'axios'
import Navigation from '../components/Navigation'

class Senjata extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
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
         <Navigation active="weapons"></Navigation>
          <Container style={{marginTop:"20px"}}>
            <Table striped bordered hover>
                <thead>
                    <tr style={{textAlign:"center"}}>
                    <th>Nomor</th>
                    <th>ID Senjata</th>
                    <th>Jenis Senjata</th>
                    <th>ID Pemilik</th>
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

export default Senjata;
