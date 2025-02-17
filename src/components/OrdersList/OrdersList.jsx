import React from 'react'
import OrderCard from '../OrderCard/OrderCard'

const OrdersList = () => {
  return (
    <div className="orders-list">
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </div>
  )
}

export default OrdersList