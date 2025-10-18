import React from 'react'

const ContactList = (props) => {
  const { contact, removeContact } = props;
  console.log(contact, "from contact")
  return (
    <div>
      <table border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
      {
        contact.map((list, id) => (
          <tr key={id}>
                <td>{list.data.name}</td>
                <td>{list.data.email}</td>
                <td><button onClick={() => removeContact(list.id)}>Delete</button></td>
          </tr>
          ))
      }
        </tbody>
      </table>
    </div>
  )
}

export default ContactList