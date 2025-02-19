import React from 'react'
import { motion } from 'framer-motion'
import CloseIcon from '../../assets/images/icons/close-icon.svg'

const SlidingPane = ({ isOpen, onClose, content }) => {
  return (
    <>
        {/* Pane Overlay */}
        {isOpen && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-3" onClick={onClose}></div>
        )}
        <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? '30%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 w-full h-[80%] z-4 bg-[#1B1D22] text-[#F0F1F1] shadow-2xl rounded-t-3xl p-4 overflow-y-auto"
        >
            <div className="flex justify-end">
                <button onClick={onClose}><img src={CloseIcon} alt="Close" /></button>
            </div>
            <div>
                {content}
            </div>
        </motion.div>
    </>
  ) 
}

export default SlidingPane