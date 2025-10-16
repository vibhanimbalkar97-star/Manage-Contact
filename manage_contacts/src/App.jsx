import './App.css'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import Header from './Components/Header'

function App() {
 
  const addContact =(data) => {
console.log(data, "from app")
  }
 
  return (
    <>
      <Header />
      <AddContact addContact={addContact}/>
      <ContactList />
    </>
  )
}

export default App
