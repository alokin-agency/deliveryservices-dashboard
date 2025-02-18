import React from 'react'
import DeliveryBag from '../../assets/images/icons/delivery-bag.svg'
import RightArrow from '../../assets/images/icons/right-arrow-gray.svg'
import MessageBox from '../../assets/images/icons/message-box.svg'

const OrderDetails = () => {
  return (
    <div className="order-details w-full py-2.5">
        <h2 className="text-xl text-[#F0F1F1] font-medium">Dostava #3</h2>
        <div className="details w-full px-2.5 mt-2.5">
            <div className="item w-full flex justify-between items-center">
                <div className="flex items-center gap-2.5">    
                    <img src={DeliveryBag} alt="Bag icon" />
                    <p className="text-sm font-medium text-[#F0F1F1]">Paket #312</p>
                </div>
                <img src={RightArrow} alt="Right arrow" />
            </div>
            <div className="item w-full flex justify-between items-center mt-2.5">
                <div className="flex items-center gap-2.5">    
                    <img src={MessageBox} alt="Bag icon" />
                    <p className="text-sm text-[#F0F1F1]">Molim vas upakujte mi u dva odvojena paketa i zovite me kada budete bili blizu</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails