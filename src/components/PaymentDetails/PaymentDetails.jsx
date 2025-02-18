import React from 'react'
import CashIcon from '../../assets/images/icons/cash.svg'

const PaymentDetails = () => {
  return (
    <div className="payment-details w-full py-5 pb-30">
        <h2 className="text-xl text-[#F0F1F1] font-medium">Detalji plaćanja</h2>
        <div className="payment-method my-3.5 flex items-center gap-2.5 px-2.5">
            <img src={CashIcon} alt="Cash icon" />
            <div>
                <p className="text-[#F0F1F1]">Keš</p>
                <p className="text-sm text-[#6C727E]">Plaćanje pouzećem</p>
            </div>
        </div>
        <div className="details mt-8">
            <div className="summary">
                <div className="item products-cost w-full flex justify-between items-center gap-2.5 text-[#F0F1F1]">
                    <p className="font-medium">Cena proizvoda</p>
                    <p id="productsCost">2 880,00 RSD</p>
                </div>
                <div className="item delivery-cost w-full pt-2.5 flex justify-between items-center gap-2.5 text-[#F0F1F1]">
                    <p className="font-medium">Cena dostave</p>
                    <p id="deliveryCost">150,00 RSD</p>
                </div>
                <div className="item subtotal w-full pt-2.5 flex justify-between items-center gap-2.5 text-[#F0F1F1]">
                    <p className="font-medium text-xl">Ukupno</p>
                    <p id="subtotal">3 030,00 RSD</p>
                </div>
            </div>
            <div className="discount py-4 my-2.5 border-t border-b border-[#6C727E]">
                <div className="item subtotal w-full flex justify-between items-center gap-2.5 text-[#F0F1F1]">
                    <p className="font-medium">Popust</p>
                    <p id="subtotal" className="text-[#6C727E]">-330,00 RSD</p>
                </div>
            </div>
            <div className="total py-5">
                <div className="item total w-full flex flex-col justify-between items-end gap-5 text-[#F0F1F1]">
                    <p className="font-medium text-xl">Ukupno RSD</p>
                    <div className="flex items-center gap-2.5">
                        <img src={CashIcon} alt="Cash icon" />
                        <p id="total" className="text-xl">2 700,00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentDetails