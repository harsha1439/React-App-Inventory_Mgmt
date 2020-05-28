import React, { Component } from 'react'
import {formatPrice} from './helpers'
import {CSSTransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'

class Order extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.renderOrder = this.renderOrder.bind(this)
    }
    
    renderOrder(key){
        const fish = this.props.fishes[key]
        const count = this.props.order[key]
    const removeButton = <button onClick = {() => this.props.ordDel(key)}>&times;</button>
    if(!fish || fish.status === 'unavailable'){
    return (
        <li key={key}>
            sorry fish is no longer available {removeButton}
        </li>
    ) 
    }
    return (
            <li key={key}>
                <span>
                < CSSTransitionGroup
                component="span"
                className="count"
                transitionName="count"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}>
                   <span key={count}>{count}</span> 
                </CSSTransitionGroup>
                    lbs {fish.name} {removeButton}
                </span>
                <span className="price">{formatPrice(count*fish.price)}</span>
            </li>
        )

    }
    render() {
        const OrderId= Object.keys(this.props.order)
        const total = OrderId.reduce((accumulator, key) => {
            const fish = this.props.fishes[key]
            const count = this.props.order[key]
            const isAvailable = fish && fish.status === 'available'
            if(isAvailable){
                return accumulator+ (count * fish.price || 0)
            }
            return accumulator
        },0)
        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <CSSTransitionGroup
                    className="order"
                    component = "ul"
                    transitionName="order"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        {OrderId.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        <p>{formatPrice(total)}</p>
                    </li>
        </CSSTransitionGroup>
            </div>
        )
    }
}

Order.propTypes = {
    fishes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    ordDel: PropTypes.func.isRequired
}

export default Order
