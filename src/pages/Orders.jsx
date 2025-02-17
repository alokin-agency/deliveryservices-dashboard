import OrdersMenu from "../components/OrdersMenu/OrdersMenu"
import OrdersList from "../components/OrdersList/OrdersList"

const Orders = () => {
  return (
    <div className="orders">
        <OrdersMenu />
        <OrdersList />
    </div>
  )
}

export default Orders