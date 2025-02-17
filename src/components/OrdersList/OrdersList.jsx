import React from 'react'
import OrderCard from '../OrderCard/OrderCard'
import SearchIcon from '../../assets/images/icons/search-input-icon.svg'

const OrdersList = () => {
  return (
    <div className="orders-list">
      <h2 className="text-xl text-[#F0F1F1] font-medium">Porudžbine <span className="delivery-count text-[#6C727E]" id="deliveryCount">(3)</span></h2>
      <div className="search flex items-center gap-1 px-1.5 py-0.75 mt-4 rounded-xl bg-[#333740] border border-[#494D59]">
        <div className="icon">
          <img src={SearchIcon} alt="Search icon" />
        </div>
        <input type="search" name="" id="searchDelivery" className="w-full text-sm text-[#F0F1F1] placeholder:text-[#6C727E] outline-none" placeholder='Pretraži porudžbine' />
      </div>
      <div className="list mt-2">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  )
}

export default OrdersList