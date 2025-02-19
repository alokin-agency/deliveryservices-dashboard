import React from 'react'
import { motion } from 'framer-motion'
import CloseIcon from '../../assets/images/icons/close-icon.svg'

const SidePane = ({ isOpen, onClose, content }) => {
  return (
    <motion.div 
    initial={{ x: '-100%' }}
    animate={{ x: isOpen ? '0' : '-100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="fixed bottom-0 left-0 w-full h-[92.6%] z-4 bg-[#2A2F39] text-[#F0F1F1] p-4 overflow-y-auto"
    >
        <div>
            {content}
        </div>
    </motion.div>
  )
}

export default SidePane