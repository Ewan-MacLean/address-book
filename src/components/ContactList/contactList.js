import Contact from "../Contact/contact"

const ContactList = function(props) {
    return(
        <div className="contactlist-container">

            {/* need to format the syntax here with "(" because combining JSX and JS is tricky */}
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