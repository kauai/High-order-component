import React, { Component } from 'react'
import withHttp from './withhttp'

const Users = props => {
    return (
        <div>
            <h1 style={props.style}>
               {props.data[0] && props.data[0].name}
            </h1>
        </div>
    )
}

export default withHttp('https://jsonplaceholder.typicode.com/users')(Users)
