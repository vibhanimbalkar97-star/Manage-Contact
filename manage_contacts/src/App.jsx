import { useState } from 'react'
import './App.css'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import Header from './Components/Header'
import uuid4 from 'uuid4';

function App() {

  const [contact, setContact] = useState([])
 
  const addContact =(data) => {
   setContact([...contact,{id: uuid4(), data} ])
     console.log(contact, "from app")
  }
 
  const removeContact = (id) => {
    setContact(contact.filter((val) => {
      return  val.id !== id;
    }))
  }
  return (
    <>
      <Header />
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </>
  )
}

export default App
