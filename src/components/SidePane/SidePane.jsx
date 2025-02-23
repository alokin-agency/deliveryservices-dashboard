import React from 'react'
import { motion } from 'framer-motion'

import IconButton from '../IconButton'
import CloseIcon from '../../assets/images/icons/close-icon.svg'
import StoreIcon from '../../assets/images/icons/store-icon.svg'
import SettingsIcon from '../../assets/images/icons/settings-icon.svg'
import LogoutIcon from '../../assets/images/icons/logout-icon.svg'
import ProfileIcon from '../../assets/images/icons/profile-icon.svg'

const SidePane = ({ isActive, onToggle, onClose }) => {
  return (
    <motion.div 
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    exit={{ x: '-100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="fixed bottom-0 left-0 w-full h-[92.6%] z-4 bg-[#2A2F39] text-[#F0F1F1] p-4 overflow-y-auto"
    >
        <div>
          <div className="active-status flex flex-col items-center mb-10 pb-10 border-b border-[#6C727E]">
              <div className="flex w-full items-center gap-2.5 mt-5 mb-2.5">
                  <div className="w-full h-0.25 bg-[#6C727E]"></div>
                  <p className="text-[#6C727E] font-medium shrink-0">Moj status</p>
                  <div className="w-full h-0.25 bg-[#6C727E]"></div>
              </div>
              <label className="relative inline-flex cursor-pointer items-center mt-2.5">
                  <input 
                      id="switch" 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={isActive}
                      onChange={onToggle}
                  />
                  <div className="relative h-7 w-14 rounded-full border bg-[#6C727E] transition-all 
                      after:absolute after:left-[2px] after:top-0.5 after:h-6 after:w-6 after:rounded-full 
                      after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] 
                      peer-checked:bg-[#58A65C] peer-checked:after:translate-x-7 peer-checked:after:border-white">
                  </div>
              </label>

              <p className="text-center font-medium mt-2">
                  {isActive ? 'Aktivan' : 'Neaktivan'}
              </p>
          </div>
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
    </motion.div>
  )
}

export default SidePane