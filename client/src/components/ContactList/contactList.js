import Contact from "../Contact/contact"

const ContactList = function(props) {
    return(
        <div className="contactlist-container">
            {props.contacts.map(contact=>(
                    <Contact key={contact.firstname} image={contact.image} firstName={contact.firstname} lastName={contact.lastname} 
                    email={contact.email} phone={contact.phone}  />
                    )
                )
            }

        </div>
    )
}

export default ContactList