import React from 'react'
import DeliveryBag from '../assets/images/icons/delivery-bag.svg'
import RightArrow from '../assets/images/icons/right-arrow-gray.svg'

const IconButton = ({ title, icon, link }) => {
  return (
    <a href={link}>
        <div className="item w-full flex justify-between items-center mb-6">
            <div className="flex items-center gap-2.5">    
                <img src={icon} alt="Bag icon" />
                <p className="text-sm font-medium text-[#F0F1F1]">{title}</p>
            </div>
            <img src={RightArrow} alt="Right arrow" />
        </div>
    </a>
  )
}

export default IconButton