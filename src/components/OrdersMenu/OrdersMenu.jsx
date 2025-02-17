import React from 'react'

const OrdersMenu = () => {
  return (
    <div className="orders-menu w-full py-1.5">
      <div className="menu w-full overflow-x-auto flex items-center gap-2.5">
        <a className="item py-1 px-2.5 border border-[#494D59] rounded-[6px] shrink-0 bg-[#333740] hover:bg-[#2A2F39] text-[#6C727E] hover:text-[#F0F1F1]">U toku</a>
        <a className="item py-1 px-2.5 border border-[#494D59] rounded-[6px] shrink-0 bg-[#333740] hover:bg-[#2A2F39] text-[#6C727E] hover:text-[#F0F1F1]">Čekaju u magacin</a>
        <a className="item py-1 px-2.5 border border-[#494D59] rounded-[6px] shrink-0 bg-[#333740] hover:bg-[#2A2F39] text-[#6C727E] hover:text-[#F0F1F1]">Sve</a>
        <a className="item py-1 px-2.5 border border-[#494D59] rounded-[6px] shrink-0 bg-[#333740] hover:bg-[#2A2F39] text-[#6C727E] hover:text-[#F0F1F1]">Završene</a>
        <a className="item py-1 px-2.5 border border-[#494D59] rounded-[6px] shrink-0 bg-[#333740] hover:bg-[#2A2F39] text-[#6C727E] hover:text-[#F0F1F1]">Otkazane</a>
      </div>
    </div>
  )
}

export default OrdersMenu