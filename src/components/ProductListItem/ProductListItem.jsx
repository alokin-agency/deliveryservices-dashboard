import React from 'react'
import JackDaniels from '../../assets/images/jack-daniels.webp'

const ProductListItem = () => {
  return (
    <div className="item flex items-center gap-1.5 mt-6">
        <div className="product-image w-12 h-12 rounded-[6px] overflow-hidden border border-[#F3AF5B] bg-[#F0F1F1]">
            <img className="w-full h-full object-cover" src={JackDaniels} alt="" />
        </div>
        <div className="product-info">
            <p className="product-name">Jack Daniel's Whiskey 0.7l</p>
            <div className="qty-price flex items-center gap-2.5">
                <p className="qty">1</p>
                <p className="text-sm text-[#6C727E]">X</p>
                <p className="text-[#F3AF5B]">2 580,00 RSD</p>
            </div>
        </div>
    </div>
  )
}

export default ProductListItem