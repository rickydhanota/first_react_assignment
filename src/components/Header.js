import React from 'react'

const Header = (props) => {
    return(
        <div>
            <h3>My Name is {props.firstName} {props.lastName}</h3>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default Header;
