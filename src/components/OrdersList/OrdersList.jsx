import React from 'react'
import OrderCard from '../OrderCard/OrderCard'
import SearchIcon from '../../assets/images/icons/search-input-icon.svg'

const OrdersList = () => {
  return (
    <div className="orders-list">

      <div className="search flex items-center gap-1 px-1.5 py-0.75 rounded-xl bg-[#333740] border border-[#494D59]">
        <div className="icon">
          <img src={SearchIcon} alt="Search icon" />
        </div>
        <input type="search" name="" id="searchDelivery" className="w-full text-sm text-[#F0F1F1] placeholder:text-[#6C727E]" placeholder='Pretraži porudžbine' />
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