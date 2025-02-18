import React from 'react'

import MapImage from '../../assets/images/google-map-location-example.png'
import Avatar from '../../assets/images/avatar-example.jpeg'
import LocationIcon from '../../assets/images/icons/location-icon.svg'
import PhoneIcon from '../../assets/images/icons/phone-icon.svg'
import RightArrow from '../../assets/images/icons/right-arrow.svg'

const OrderSummary = () => {
  return (
    <div className="order-summary w-full py-2.5">
        <div className="map w-full h-30 rounded-2xl relative overflow-hidden">
          <img className="relative z-[-1] w-full h-full object-cover object-center" src={MapImage} alt="Map image" />
          <div className="overlay w-full h-[54px] absolute bottom-0 left-0 z-1"></div>
        </div>
        <div className="date-author flex justify-between items-center mt-[13px]">
          <p className="date text-sm text-[#6C727E]">25 JANUAR 2025 | 23:52</p>
          <div className="author flex items-center gap-1.25">
            <img className="w-5 h-5 rounded-[99px]" src={Avatar} alt="" />
            <p className="text-sm text-[#F0F1F1]">Milan</p>
          </div>
        </div>
        <div className="shortcuts w-full mt-2.5">
          <div className="shortcut w-full flex justify-between items-center px-2.25 py-1.5 rounded-[12px] bg-[#333740] border border-[#F3AF5B]">
            <div className="address flex items-center gap-[5px]">
              <img src={LocationIcon} alt="Location icon" />
              <p className="text-sm text-[#F0F1F1]">Vidovdanska 16, Kruševac</p>
            </div>
            <img src={RightArrow} alt="Right arrow" />
          </div>
          <div className="shortcut w-full mt-2.5 flex justify-between items-center px-2.25 py-1.5 rounded-[12px] bg-[#333740] border border-[#F3AF5B]">
            <div className="phone flex items-center gap-[5px]">
              <img src={PhoneIcon} alt="Phone icon" />
              <p className="text-sm text-[#F0F1F1]">064 322 1536</p>
            </div>
            <img src={RightArrow} alt="Right arrow" />
          </div>
        </div>
    </div>
  )
}

export default OrderSummary