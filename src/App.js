import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"




function App() {


  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  


  return (
    <div className="App">
      <header className="App-header">

    <h3>Number is : {myState} </h3>
    
     <div>
      <button className="actionButton"  onClick={()=>{ dispatch(incNumber(10))}}>INCREMENT </button>
      <button className="actionButton"   onClick={()=>{dispatch(decNumber(5))}}>DECREMENT </button>
     </div>



      </header>
    </div>
  );
}

export default App;
