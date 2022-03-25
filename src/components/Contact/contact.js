

const Contact = function(props) {
    return(
        <div className='prodTile'>
            <img src={props.image}/>
            <header className='name'>{props.firstName}</header>
            <header className='name'>{props.lastName}</header>
            <div className='description'>{props.email}</div>
            <div className='description'>{props.phone}</div>

        </div>
    )
}

export default Contact