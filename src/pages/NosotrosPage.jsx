import React from 'react';
    import { motion } from 'framer-motion';
    import { Heart, Users, Target, Award, CheckCircle } from 'lucide-react';
    import PageWrapper from '@/components/shared/PageWrapper';

    const NosotrosPage = () => {
      const values = [
        { icon: <Heart className="text-pink-500" />, title: "Amor por lo hecho a mano" },
        { icon: <Users className="text-purple-500" />, title: "Empatía con los clientes" },
        { icon: <Target className="text-yellow-500" />, title: "Creatividad" },
        { icon: <Award className="text-green-500" />, title: "Calidad artesanal" },
        { icon: <CheckCircle className="text-blue-500" />, title: "Compromiso emocional" },
      ];

      return (
        <PageWrapper>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nuestra Esencia
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img  
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                alt="Proceso de producción artesanal de alfajores"
               src="https://images.unsplash.com/photo-1552552492-9c335658343d" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">Historia</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dolcezza Suprema nace de la pasión por lo auténtico. Fundado en Bucaramanga, buscamos conectar corazones con alfajores artesanales, artísticos y humanos.
              </p>
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">Misión</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Endulzar momentos con productos artesanales llenos de cariño y cercanía.
              </p>
              <h2 className="text-3xl font-semibold mb-4 text-purple-700">Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser marca referente en Colombia, fusionando lo artesanal con lo emocional.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-600">Nuestros Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="p-3 bg-pink-100 rounded-full mb-4">{React.cloneElement(value.icon, { size: 32 })}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </PageWrapper>
      );
    };

    export default NosotrosPage;