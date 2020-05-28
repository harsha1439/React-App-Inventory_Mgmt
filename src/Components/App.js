import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampledata from './sample-fishes'
import Fish from './Fish'
 import base from '../base'
 import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fishes: {},
       order: {}
    }
    this.addFish = this.addFish.bind(this)
    this.loadSampleData = this.loadSampleData.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.updateFishData = this.updateFishData.bind(this)
    // this.deleteFishItem  = this.deleteFishItem.bind(this)
   this.removeOrderItem = this.removeOrderItem.bind(this)
  }
  componentDidMount(){
    base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const localStorageref = localStorage.getItem(`order-${this.props.match.params.storeId}`)

    if(localStorageref){
      this.setState({
        order: JSON.parse(localStorageref)
      })
    }
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  componentWillUpdate(propsUp,stateUp){
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(stateUp.order))
  }
 
  addFish(fish){
    const fishFromAdd = {...this.state.fishes}
    const timeStamp = Date.now()
    fishFromAdd[`fish-${timeStamp}`] = fish
    this.setState({
      fishes: fishFromAdd
    })
  }

  updateFishData(key, updateFish){
    const fishes = {...this.state.fishes}
    fishes[key] = updateFish
    this.setState({
      fishes: fishes
    })
  }

  deleteFishItem = (key) => {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({
        fishes: fishes
    })
  }

  removeOrderItem(key){
    const order = {...this.state.order}
    delete order[key]
    this.setState({
      order: order
    })
  }

  loadSampleData(){
      this.setState({
        fishes: sampledata
      })
  }

  addToOrder(key){
    const order = {...this.state.order}
    order[key] = order[key]+1 || 1;
    this.setState({
      order: order
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline = "Catch -of-Day"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(ele => <Fish key={ele} index={ele} addOrder={this.addToOrder} details={this.state.fishes[ele]} />)
            }   
          </ul>
          
        </div>
        <Order 
        ordDel = {this.removeOrderItem}
        params={this.props.match}
        fishes = {this.state.fishes} 
        order = {this.state.order}/>
        <Inventory 
        del = {this.deleteFishItem} 
        update={this.updateFishData} 
        fishes={this.state.fishes} 
        sampledata={this.loadSampleData} 
        setFish = {this.addFish}/>
      </div>
    )
  }
}

App.protoTypes = {
  params: PropTypes.object.isRequired
}

export default App

