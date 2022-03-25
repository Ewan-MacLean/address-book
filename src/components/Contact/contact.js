import './contact.css'

const Contact = function(props) {
    return(
        <div className='contactTile'>
            <img src={props.image}/>
            <header className='name'>{props.firstName}</header>
            <header className='name'>{props.lastName}</header>
            <div className='email'>{props.email}</div>
            <div className='phone'>{props.phone}</div>
            <button>Update Contact</button>
            <button>Remove Contact</button>
        </div>
    )
}

export default Contact