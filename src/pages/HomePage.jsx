import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import PageWrapper from '@/components/shared/PageWrapper';

    const HomePage = () => {
      return (
        <PageWrapper>
          <div className="text-center py-16 md:py-24">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bienvenidos a Dolcezza Suprema
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Donde cada alfajor es una obra de arte que endulza tus días. Creamos experiencias dulces con amor y dedicación, fusionando lo artesanal con lo emocional. Descubre nuestros productos y siéntete abrazado en cada bocado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/productos">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                  Descubre Nuestros Sabores
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="my-12 md:my-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img  
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl object-cover h-64 md:h-96" 
              alt="Alfajores artesanales Dolcezza Suprema"
             src="https://images.unsplash.com/photo-1552552492-9c335658343d" />
          </motion.div>
        </PageWrapper>
      );
    };

    export default HomePage;