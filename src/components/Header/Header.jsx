import React, { useState, useEffect } from 'react'

import SidePane from '../SidePane/SidePane'

import BurgerIcon from '../../assets/images/icons/burger-menu.svg'
import BurgerIconActive from '../../assets/images/icons/burger-menu-active.svg'
import ProfileIcon from '../../assets/images/icons/profile-icon.svg'

const Header = () => {
    const [paneContent, setPaneContent] = useState(null);
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive((prev) => !prev);
        // here we should save courier's current active status in the db
    };

    const OpenMenu = () => {
        setIsPaneOpen(true);
    };

  return (
    <>
        <div className="header p-2.5 bg-[#222429]">
            <div className="header-wrap w-full mx-auto max-w-7xl flex justify-between items-center gap-2.5">
                <div onClick={isPaneOpen ? () => setIsPaneOpen(false) : OpenMenu} className={"p-2 rounded-[12px] border " + (isPaneOpen ? 'border-[#F3AF5B] bg-[#D6831C]' : 'border-[#494D59] bg-[#333740]')}>
                    <img src={isPaneOpen ? BurgerIconActive : BurgerIcon} alt="Menu" />
                </div>
                <div className="p-2 rounded-[12px] border border-[#494D59] bg-[#333740]">
                    <img src={ProfileIcon} alt="Profile" />
                </div>
            </div>
        </div>
        <div className="subheader pl-4 py-1.5 flex items-center gap-3 bg-[#1B1D22] text-[#6C727E] overflow-x-auto">
            <a>Porudžbine</a>
            <a>Mapa</a>
            <a>Analitika</a>
            <a>Profil</a>
        </div>
        {isPaneOpen && (
            <SidePane
                isActive={isActive}
                onToggle={handleToggle}
            />
        )}
    </>
  )
}

export default Header