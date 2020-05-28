import React from 'react'
import { Link } from 'react-router-dom'


class StorePicker extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             store: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        this.setState({
            store: event.target.value
            
        })
    }
    render(){
        
       
        return (
            <form className="store-selector">
                <h2>Please Enter a store Name</h2>
                <input type = "text" placeholder="Enter a Store Name" required value={this.state.store} onChange={this.handleChange}></input>
                <Link to={`/store/${this.state.store}`}><button type="submit">Visit Store -></button></Link>
            </form>
        )
    }
}




export default StorePicker