import React from 'react'
import BurgerIcon from '../../assets/images/icons/burger-menu.svg'
import ProfileIcon from '../../assets/images/icons/profile-icon.svg'

const Header = () => {
  return (
    <>
        <div className="header p-2.5 bg-[#222429]">
            <div className="header-wrap w-full mx-auto max-w-7xl flex justify-between items-center gap-2.5">
                <div className="p-2 rounded-[12px] border border-[#494D59] bg-[#333740]">
                    <img src={BurgerIcon} alt="Menu" />
                </div>
                <div className="p-2 rounded-[12px] border border-[#494D59] bg-[#333740]">
                    <img src={ProfileIcon} alt="Profile" />
                </div>
            </div>
        </div>
        <div className="subheader pl-4 py-1.5 flex items-center gap-3 bg-[#1B1D22] overflow-x-auto">
            <a className="text-[#6C727E]">Porudžbine</a>
            <a className="text-[#6C727E]">Mapa</a>
            <a className="text-[#6C727E]">Analitika</a>
            <a className="text-[#6C727E]">Profil</a>
        </div>
    </>
  )
}

export default Header