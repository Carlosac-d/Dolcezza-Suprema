import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Facebook, Instagram, MessageSquare } from 'lucide-react';

    const Footer = ({ navLinks }) => {
      return (
        <motion.footer 
          className="bg-black text-gray-300 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="font-semibold text-golden-400 mb-2 text-lg">Dolcezza Suprema</p>
                <p className="text-sm">&copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>
                <p className="text-sm">Contacto: <a href="mailto:dolcezzasuprema@gmail.com" className="hover:text-golden-300 transition-colors">dolcezzasuprema@gmail.com</a></p>
              </div>
              <div>
                <p className="font-semibold text-golden-400 mb-2 text-lg">Enlaces Rápidos</p>
                <ul className="space-y-1">
                  {navLinks.map(link => (
                     <li key={link.name}><Link to={link.path} className="hover:text-golden-300 transition-colors text-sm">{link.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-golden-400 mb-2 text-lg">Síguenos</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-golden-300 transition-colors"><Facebook size={24} /></a>
                  <a href="https://instagram.com/dolcezzasuprema" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-golden-300 transition-colors"><Instagram size={24} /></a>
                  <a href="https://wa.me/573154549060" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-golden-300 transition-colors"><MessageSquare size={24} /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-xs text-gray-500">Diseñado con amor y dulzura.</p>
            </div>
          </div>
        </motion.footer>
      );
    };

    export default Footer;