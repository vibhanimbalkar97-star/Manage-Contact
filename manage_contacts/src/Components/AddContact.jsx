import React from 'react'

const AddContact = () => {

    return (
        <div>
            <h1>Add Contact</h1>
            <form>
                <label>Name:</label>
                <br />
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <label>Email:</label>
                <br />
                <input type="text" placeholder="Enter Email" />
                <br /><br />
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact