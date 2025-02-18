import OrderSummary from "../components/OrderSummary/OrderSummary"
import OrderDetails from "../components/OrderDetails/OrderDetails"
import PaymentDetails from "../components/PaymentDetails/PaymentDetails"

const SingleOrder = () => {
  return (
    <div className="single-order">
      <OrderSummary />
      <OrderDetails />
      <PaymentDetails />
    </div>
  )
}

export default SingleOrder