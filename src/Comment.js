import React from 'react'
import withHttp from './withhttp'

const Comments = props => {
    props.data[0] && console.log(props.data[0])
    return (
      <div>
         <h1>
           {props.data[0] && props.data[0].name}
         </h1>
      </div>
    )
}

export default withHttp('https://jsonplaceholder.typicode.com/comments')(Comments)
