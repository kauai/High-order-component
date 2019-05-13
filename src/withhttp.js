import React,{ Component } from 'react'
import Axios from 'axios'

const withHttp = url => WrappedComponent => {

   return class extends Component {
    
    constructor() {
        super()
        this.state = {
          loading:false,
          data:[]
        }
    }
    
      componentDidMount() {
        this.setState({loading:true})
        Axios.get(url)
        .then(item => {
            this.setState({
                loading:false,
                data:item.data
            })
        })
      }
        render() {
           return (
            <div>
                <WrappedComponent
                data={this.state.data}
                { ...this.props }
                />
            </div>
       )
      }
   }
}

export default withHttp