import OrderSummary from "../components/OrderSummary/OrderSummary"
import OrderDetails from "../components/OrderDetails/OrderDetails"
import PaymentDetails from "../components/PaymentDetails/PaymentDetails"
import DeliveryIcon from '../assets/images/icons/delivery-truck.svg'

const SingleOrder = () => {
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
        <button className="w-[55%] py-2.5 px-6 bg-[#315DF6] rounded-[6px] text-[#F0F1F1] text-center">Završi dostavu</button>
      </div>
    </div>
  )
}

export default SingleOrder