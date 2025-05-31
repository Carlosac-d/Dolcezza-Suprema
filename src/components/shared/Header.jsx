import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Menu, X } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import NavLinkItem from '@/components/shared/NavLinkItem';

    const Header = ({ navLinks, isMobileMenuOpen, setIsMobileMenuOpen }) => {
      const location = useLocation();
      return (
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md shadow-lg z-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/e014b7939a8911d91c4658ca8b33d2c1.jpg" alt="Dolcezza Suprema Logo" className="h-12 w-auto rounded-full border-2 border-golden-500" />
                <span className="text-2xl font-bold text-golden-400 tracking-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>Dolcezza Suprema</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.name} to={link.path} currentPath={location.pathname}>
                    {link.name}
                  </NavLinkItem>
                ))}
              </nav>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-golden-400 hover:text-golden-300">
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </Button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black bg-opacity-90"
              >
                <nav className="flex flex-col items-center space-y-4 py-4">
                  {navLinks.map((link) => (
                    <NavLinkItem key={link.name} to={link.path} currentPath={location.pathname} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </NavLinkItem>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      );
    };

    export default Header;