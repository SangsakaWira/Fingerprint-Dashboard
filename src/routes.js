import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Record from './pages/Record'
import Login from './pages/Login'
import Register from './pages/Register'
import Senjata from './pages/Senjata'
import User from './pages/User'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Record}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/record" exact component={Record}></Route>
                <Route path="/users" exact component={User}></Route>
                <Route path="/weapons" exact component={Senjata}></Route>
            </BrowserRouter>
        </div>
    )
}

export default App;