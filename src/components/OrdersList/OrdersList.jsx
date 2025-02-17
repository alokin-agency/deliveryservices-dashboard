import React from 'react'
import OrderCard from '../OrderCard/OrderCard'

const OrdersList = () => {
  return (
    <div className="orders-list">

      <div className="search">
        <div className="icon"></div>
        <input type="search" name="" id="" />
      </div>
      <div className="list">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  )
}

export default OrdersList