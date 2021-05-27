import {React,useState}from "react";
import './App.css';

function App() {
  const [inputList,setInputList]=useState("")
  const[Items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }
  const listOfItem=()=>{
        setItems((oldItems)=>{
          return[...oldItems,inputList];
          
        })
        setInputList("")
  }
  
  return (
    <div >
     
     <div className="main">
     <div className="center">
       <h1>Todo list</h1>
       <br/>
         <input type="text" placeholder="Enter the item" onChange={itemEvent} value={inputList} />
         <button onClick={listOfItem} >+</button>

          <ol>
          { Items.map((Itemval)=>{
                     return (<li>{Itemval}</li>
                       ) } )
                }



           </ol>
       </div>

     </div>



    </div>
  );
}

export default App;
