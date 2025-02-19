import React, { useState } from 'react'

import OrderSummary from "../components/OrderSummary/OrderSummary"
import OrderDetails from "../components/OrderDetails/OrderDetails"
import PaymentDetails from "../components/PaymentDetails/PaymentDetails"
import DeliveryIcon from '../assets/images/icons/delivery-truck.svg'
import BottomPane from '../components/BottomPane/BottomPane'
import ProductListItem from '../components/ProductListItem/ProductListItem'
import Avatar from '../assets/images/avatar-example.jpeg'

const SingleOrder = () => {
  const [paneContent, setPaneContent] = useState(null);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const openFinishDelivery = () => {
    setPaneContent(
      <div>
        <h2 className="text-xl">Završi dostavu</h2>
        <div class="products-list max-h-[150px] overflow-y-auto">
          <ProductListItem />
          <ProductListItem />
          <ProductListItem />
        </div>
        <div className="order-details mt-12 pt-2.5 pb-5 border-t border-b border-[#494D59]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.25 p-1.25 rounded-[6px] border border-[#F3AF5B]">
              <p className="text-sm">Paket</p>
              <div className="py-0.25 px-[0.5px] bg-[#D6831C] rounded-[3px] text-sm">312</div>
            </div>
            <div className="author flex items-center gap-1.25">
              <img className="w-5 h-5 rounded-[99px]" src={Avatar} alt="" />
              <p className="text-sm text-[#F0F1F1]">Milan</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <p className="font-medium">Za naplatu</p>
            <p>2 880,00 RSD</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 mt-6">
          <button className="w-[50%] py-2.5 px-1.5 bg-[#D7503F] rounded-[6px] text-[#F0F1F1] text-center">Prekini dostavu</button>
          <button className="w-[50%] py-2.5 px-6 bg-[#58A65C] rounded-[6px] text-[#F0F1F1] text-center">Kompletiraj</button>
        </div>
      </div>
      );
    setIsPaneOpen(true);
  };

  return (
    <div className="single-order">
      <OrderSummary />
      <OrderDetails />
      <PaymentDetails />
      <div className="sticky-cta w-full fixed bottom-0 left-0 z-3 flex items-center gap-2.5 p-2.5">
        <button className="w-[45%] py-2.5 px-1.5 bg-[#58A65C] rounded-[6px] text-[#F0F1F1] flex justify-between items-center">
          <img src={DeliveryIcon} alt="Delivery truck icon" />
          30min
        </button>
        <button onClick={openFinishDelivery} className="w-[55%] py-2.5 px-6 bg-[#D6831C] rounded-[6px] text-[#F0F1F1] text-center">Završi dostavu</button>
      </div>
      <BottomPane
      isOpen={isPaneOpen}
      onClose={() => setIsPaneOpen(false)}
      content={paneContent}
      />
    </div>
  )
}

export default SingleOrder