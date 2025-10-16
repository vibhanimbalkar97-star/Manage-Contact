import React, { useState } from 'react'

const AddContact = () => {
const [input, setInput] = useState({name: "", email: ""})

const handleOnChange= (e) => {
   if(e.target.name === "name"){
    setInput({...input, name: e.target.value});
   } else {
    setInput({...input, email:e.target.value})
   }
        setInput("")

}

const handleAdd = () => {
    if(input.name === "" || input.email === ""){
        alert("Fill all the details");
        return;
    }
    console.log(input)
}


    return (
        <div>
            <h1>Add Contact</h1>
            <form>
                <label>Name:</label>
                <br />
                <input type="text" placeholder="Enter name" name="name" value={input.name} onChange={handleOnChange}/>
                <br /><br />
                <label>Email:</label>
                <br />
                <input type="text" placeholder="Enter Email" name="email" value={input.email} onChange={handleOnChange}/>
                <br /><br />
               
            </form>
             <button onClick={handleAdd}>Add Contact</button>
        </div>
    )
}

export default AddContact