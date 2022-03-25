

const Contact = () => {
    return(
        <div className='prodTile'>
            <header className='name'>{props.firstName}</header>
            <header className='name'>{props.lastName}</header>

            <img src={props.image}/>
            <div className='description'>{props.email}</div>
            <div className='description'>{props.phone}</div>

        </div>
    )
}

export default Contact