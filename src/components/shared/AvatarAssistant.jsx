import React from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    const AvatarAssistant = ({ message, showBubble, onClick, avatarImageUrl }) => {
      return (
        <>
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 50, x: 50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 50, x: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-24 right-5 bg-white p-4 rounded-lg shadow-xl border border-pink-300 z-50 max-w-xs"
              >
                <p className="text-sm text-gray-700">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="fixed bottom-5 right-5 z-50">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-pink-500 rounded-full shadow-lg cursor-pointer w-16 h-16 flex items-center justify-center"
              onClick={onClick}
            >
              <img src={avatarImageUrl} alt="Asistente Virtual" className="w-12 h-12 rounded-full object-cover" />
            </motion.div>
          </div>
        </>
      );
    };

    export default AvatarAssistant;