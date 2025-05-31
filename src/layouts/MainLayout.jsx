import React, { useState, useEffect } from 'react';
    import { useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import Header from '@/components/shared/Header';
    import Footer from '@/components/shared/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import AvatarAssistant from '@/components/shared/AvatarAssistant';

    const navLinks = [
      { name: 'Inicio', path: '/' },
      { name: 'Nosotros', path: '/nosotros' },
      { name: 'Servicios', path: '/servicios' },
      { name: 'Productos', path: '/productos' },
      { name: 'Galería', path: '/galeria' },
      { name: 'Contáctanos', path: '/contactanos' },
      { name: 'Blog', path: '/blog' },
    ];
    
    const avatarMessages = {
      '/': "¡Bienvenido a Dolcezza Suprema! Explora nuestro dulce mundo.",
      '/nosotros': "Conoce nuestra historia, misión y los valores que nos inspiran.",
      '/servicios': "Descubre los servicios especiales que ofrecemos para endulzar tus momentos.",
      '/productos': "¡Aquí puedes ver todos nuestros productos! Haz clic en los que más te gusten.",
      '/galeria': "Explora nuestra galería interactiva y mira cómo combinamos arte y dulzura.",
      '/contactanos': "¿Tienes preguntas o quieres hacer un pedido? ¡Contáctanos!",
      '/blog': "Encuentra tips, historias y recetas dulces en nuestro blog."
    };

    const MainLayout = ({ children }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const location = useLocation();
      const [showAvatarMessage, setShowAvatarMessage] = useState(false);
      const [avatarMessage, setAvatarMessage] = useState("");
      
      const currentAvatarMessage = avatarMessages[location.pathname] || "¡Hola! Estoy aquí para ayudarte.";

      useEffect(() => {
        setAvatarMessage(currentAvatarMessage);
        setShowAvatarMessage(true);
        const timer = setTimeout(() => setShowAvatarMessage(false), 5000);
        return () => clearTimeout(timer);
      }, [location.pathname, currentAvatarMessage]);

      return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 text-gray-800 font-serif">
          <Header 
            navLinks={navLinks} 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />
          <main className="flex-grow pt-20">
            <AnimatePresence mode="wait">
              {React.cloneElement(children, { key: location.pathname })}
            </AnimatePresence>
          </main>
          <Footer navLinks={navLinks.filter(link => ['/', '/productos', '/contactanos'].includes(link.path))} />
          <Toaster />
          <AvatarAssistant 
            message={avatarMessage}
            showBubble={showAvatarMessage}
            onClick={() => {
              setShowAvatarMessage(prev => !prev);
              if (!showAvatarMessage) {
                setAvatarMessage(currentAvatarMessage);
              }
            }}
            avatarImageUrl="https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/8e7c1eb16ac8565455ff756f19c44749.png"
          />
        </div>
      );
    };

    export default MainLayout;