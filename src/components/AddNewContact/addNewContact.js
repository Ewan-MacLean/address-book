import './addNewContact.css'

const AddNewContact = function(props) {
    return(
        <form className='form'>
            <input placeholder='Image URL'></input>
            <input placeholder='First Name'></input>
            <input placeholder='Last Name'></input>
            <input placeholder='Email' type='email'></input>
            <input placeholder='Phone'></input>
            <button>Submit</button>
        </form>
    )
}

export default AddNewContact