import React, { useState } from 'react'

import SidePane from '../SidePane/SidePane'
import IconButton from '../IconButton'

import BurgerIcon from '../../assets/images/icons/burger-menu.svg'
import BurgerIconActive from '../../assets/images/icons/burger-menu-active.svg'
import ProfileIcon from '../../assets/images/icons/profile-icon.svg'
import StoreIcon from '../../assets/images/icons/store-icon.svg'
import SettingsIcon from '../../assets/images/icons/settings-icon.svg'
import LogoutIcon from '../../assets/images/icons/logout-icon.svg'

const Header = () => {
    const [paneContent, setPaneContent] = useState(null);
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const OpenMenu = () => {
        setPaneContent(
            <div>
                <IconButton
                title='Moje porudžbine'
                icon={StoreIcon}
                link='/'
                />
                <IconButton
                title='Profil'
                icon={ProfileIcon}
                link='#'
                />
                <IconButton
                title='Podešavanja naloga'
                icon={SettingsIcon}
                link='#'
                />
                <IconButton
                title='Izloguj se'
                icon={LogoutIcon}
                link='#logout'
                />
            </div>
        );
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
        <SidePane 
        isOpen={isPaneOpen}
        onClose={() => setIsPaneOpen(false)}
        content={paneContent}
        />
    </>
  )
}

export default Header