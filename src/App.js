import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Body from './components/Body';
import { CartProvider } from './context/CartContext';


// const reducer = (state,{type,payload})=>{
//   switch(type){
//     case "INCREMENT":{
//         return state+payload;
//     }
//     case "DECREMENT":{
//       return state-payload;
//     }
//     default:{
//       return state;
//     }
//   }
// }

function App() {

//   const [counter, dispatch] = React.useReducer(reducer,0)

//   return (
//     <div className="App">

//       counter:{counter}
//       <div>
//         <button onClick={()=>dispatch({type:"DECREMENT",payload:1})}>-</button>
//         <button onClick={()=>dispatch({type:"INCREMENT",payload:100})}>+</button>
//       </div>
//     </div>

return (

  <div className='App'>

    <CartProvider>
    <Navbar/>
    <Body/>
    </CartProvider>
    

  </div>

  );
}

export default App;
