import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddFishForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef1 = React.createRef()
        this.inputRef2 = React.createRef()
        this.inputRef3 = React.createRef()
        this.inputRef4 = React.createRef()
        this.inputRef5 = React.createRef()
        this.clearRef = React.createRef()
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    

    handleSubmit(event){
        event.preventDefault()
        var fish = {
            name: this.inputRef1.current.value,
            price: this.inputRef2.current.value,
            status: this.inputRef3.current.value,
            desc: this.inputRef4.current.value,
            image: this.inputRef5.current.value
        }
       
        this.props.getFish(fish)
    }

    render() {
        return (
           <form ref={this.clearRef} className="fish-edit" onSubmit={this.handleSubmit} >
               <input ref={this.inputRef1} type="text" placeholder="Fish Name"></input>
               <input ref={this.inputRef2} type="text" placeholder="Fish Price"></input>
               <select ref={this.inputRef3}>
                   <option value="available">Fresh</option>
                   <option value="unavailable">Sold Out!</option>
               </select>
               <textarea ref={this.inputRef4} type="text" placeholder="Fish Desc"></textarea>
               <input ref={this.inputRef5} type="text" placeholder="Fish Image"></input>
               <button type="submit">+ Add Item</button>
               
           </form>
        )
    }
}

AddFishForm.propTypes = {
    getFish: PropTypes.func.isRequired
}
export default AddFishForm
