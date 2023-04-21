import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  // Array State(Store all Textarea inputs in Array)
  const [inputsarry, setinputsArry] = useState([]);
  
  // Take input From Textarea Stored in a State
  const [inputs, setInupts] = useState({
    name: "",
  });
  
  // Select option from Drowp Down and store in State
  const [selectopsion, setSelectopsion] = useState("");
  
  // Do button enabled and disabled(if user type something than button enabled other wise button is disabled)
  const[disable,setDisable]=useState(true)

  // Function for Clrearing The Textarea and also clear Selected option from Dropdown
  const ClearTextarea = () => {
    document.getElementById("input-data").value = "";
    setSelectopsion("");
    setInupts("");
  };

  // Function for take user inputs and Stored in State(in object form)
  const handlechange = (e) => {
    setInupts({ ...inputs, [e.target.name]: e.target.value });
    if(document.getElementById("input-data").value.length>0){
      setDisable(false)
    }else{
      setDisable(true)
      setSelectopsion("");
    }
 
  };

  // Destructuring name field  from inputs State
  const { name } = inputs;

  // Function for store name field values from inputs state in Array form(one by one set all text inputs)
  const halndlevalue = () => {
    setinputsArry([...inputsarry, { name }]);
    setInupts({ name: "" });
    toast("Name Added");
    ClearTextarea();
    setDisable(true)
  };

  // Function for any select option from dropdown then store in state and that state value simply highlight
  const getListValue = () => {
    let SelectedValue = document.getElementById("list").value;
    setSelectopsion(SelectedValue);
  };

  return <>
   <Toaster/>
    <div className='app'>

      <div className='text-area'>
      <div className='main-dropdown'>
        {    inputs.name==="@"   ? <select className='dropdown' name="" id="list" onClick={getListValue}>
          {
            inputsarry.map((name)=>{
              return(
                  <option  value={name.name}>{name.name}</option>
              )
            })
          }
        </select>:""}
      </div>

      <textarea name="name" id='input-data' placeholder="Enter Name" maxLength={25} onChange={handlechange}  cols="30" rows="7"> 
       </textarea>

      <div className='btn'>
      <button disabled={disable} onClick={halndlevalue} className='btn-add'>+ Add Note</button> 
      <button onClick={ClearTextarea} className='btn-reset'>Reset</button>
      </div>


       {/* Show Selected option from DropDown */}
      {
      selectopsion && <div className='select-ops'>
       <h2>{selectopsion}</h2>
      </div>
      }
      </div>
    </div>
    </>;
}
export default App;
