import React from 'react'

const OrderCard = () => {
  return (
    <a href="#">
      <div className="card order-card w-full border-b border-[#494D59] pb-2.5 mb-2.5">
          <div className="card-content flex justify-between">
            <div className="card-info flex flex-col justify-between text-[#F0F1F1]">
              <div>
                <p className="title text-base/tight">Dostava #1</p>
                <p className="address text-sm/tight">3. sprat, stan 34, Vidovdanska 16, Kruševac</p>
              </div>
              <p className="package-info mt-2 text-[#6c727e] text-sm">Paket #312 | Dostava u toku</p>
            </div>
            <div className="card-status flex flex-col justify-between">
              <div className="status">Ongoing</div>
              <p className="eta text-[#6c727e] text-sm">ETA: 23:52</p>
            </div>
          </div>
      </div>
    </a>
  )
}

export default OrderCard