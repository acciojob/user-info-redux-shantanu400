
import React from "react";
import './../styles/App.css';
import {Store} from "./Store"
import {Provider} from "react-redux"
import {useSelector,useDispatch} from "react-redux"
import { keepEmail,keepName } from "./auth/authSlice";


const App = () => {
  const name=useSelector((state)=>state.authdetails.name)
  const email=useSelector((state)=>state.authdetails.email)
  const dispatch=useDispatch();
  return (
    <Provider Store={Store}>
        <form>
         <p>Name: <input type="text" placeholder="Enter name" onChange={()=>useDispatch(keepEmail(e.target.value))}></input></p>
         <p>email: <input type="text" placeholder="Enter email" onChange={()=>useDispatch(keepName(e.target.value))}></input></p>
        </form>

<h3>Current values in store:</h3>
<p>Name-{name}</p>
<p>Email-{email}</p>
    </Provider>
  )
}

export default App
