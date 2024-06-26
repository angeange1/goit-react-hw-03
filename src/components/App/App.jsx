import { useEffect, useState } from 'react'
import './App.modules.css'
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"

function App() {
  const [filter, setFilter] = useState("")

  const [contactsArr, setContactsArr] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts")
    if (savedContacts !== null) {return JSON.parse(savedContacts)}
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  })

  useEffect(() => {
  window.localStorage.setItem("saved-contacts", JSON.stringify(contactsArr))
  }, [contactsArr])

  const addContact = (newContactDetails) => {
    // console.log(newContactDetails);
    setContactsArr((prevContactsArr) => {return [...prevContactsArr, newContactDetails]})
  };

  const deleteContact = (contactId) => {
setContactsArr(prevContactsArr => {return prevContactsArr.filter(contact => contact.id !== contactId)})
  }

  const filteredContacts = contactsArr.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
