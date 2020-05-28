import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import PropTypes from 'prop-types'

class Inventory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            uid: null,
            owner: null
        }
        this.renderOrder = this.renderOrder.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // this.renderLogin = this.renderLogin.bind(this)
        
    }

    changeHandler(e ,key){
       const fish = this.props.fishes[key]
        const updateFish = {...fish, 
        [e.target.name]: e.target.value}
        this.props.update(key, updateFish)
    }

    deleteItem(event, key){
        this.props.del(key)
        event.preventDefault()
        
    }
    
    // authenticate(provider){
    //     console.log(`trying to login with ${provider}`)
    // }

    // renderLogin(){
    //     return (
    //         <nav className="login">
    //             <h2>Inventory</h2>
    //             <p>Sign in to manage your store's inventory </p>
    //             <button className="facebook" onClick={() => this.authenticate('facebook')}>Login With facebook</button>
    //             <button className="github" onClick={() => this.authenticate('github')}>Login With GitHub</button>
    //         </nav>
    //     )
    // }

    renderOrder(key){
        const fish = this.props.fishes[key]
    return (
        <div className="fish-edit" key={key}>
                <input type="text" name="name"  value={fish.name} placeholder="Fish Name" onChange={(e) => this.changeHandler(e,key)}></input>
               <input  type="text" name="price"  value={fish.price}  placeholder="Fish Price"onChange={(e) => this.changeHandler(e,key)} ></input>
               <select name="status"  value={fish.status} onChange={(e) => this.changeHandler(e,key)}>
                   <option value="available">Fresh</option>
                   <option value="unavailable">Sold Out!</option>
               </select >
               <textarea name="desc"  value={fish.desc}  type="text" placeholder="Fish Desc" onChange={(e) => this.changeHandler(e,key)}></textarea>
               <input  name="image"  value={fish.image}  type="text" placeholder="Fish Image" onChange={(e) => this.changeHandler(e,key)}></input>
               <button onClick={(event) => this.deleteItem(event,key)}>Remove Item</button> 
        </div>
    )

    }
    
    render() {
        //const logout = <button>LogOut</button>
        // //check if they are loged In
        // if(!this.state.uid){
        //     return <div>{this.renderLogin()}</div>
        // }

        // //Check if he is the owner of the store

        // if(this.state.uid !== this.state.owner){
        //     return (
        //         <div>
        //             <p>Sorry you are not the owner</p>
        //             {logout}
        //         </div>
        //     )
        // }
        return (
            <div className="order-wrap">
                <h2>Inventory</h2>
                    {Object.keys(this.props.fishes).map(this.renderOrder)}
                <AddFishForm getFish={this.props.setFish}></AddFishForm>
                <button onClick={this.props.sampledata}>Laod Sample Data</button>
            </div>
        )
    }
}

Inventory.propTypes = {
    fishes: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    setFish: PropTypes.func.isRequired,
    sampledata: PropTypes.func.isRequired
}
export default Inventory
