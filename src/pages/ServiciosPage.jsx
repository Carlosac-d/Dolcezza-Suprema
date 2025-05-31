import React from 'react';
    import { motion } from 'framer-motion';
    import { Gift, Package, Image as ImageIconLucide, Truck } from 'lucide-react';
    import PageWrapper from '@/components/shared/PageWrapper';

    const ServiciosPage = () => {
      const services = [
        { icon: <Gift className="text-pink-500" />, title: "Cajitas personalizadas", description: "Creamos cajitas únicas para tus regalos especiales." },
        { icon: <Package className="text-purple-500" />, title: "Pedidos por encargo", description: "Alfajores hechos a tu medida para cualquier ocasión." },
        { icon: <ImageIconLucide className="text-yellow-500" />, title: "Alfajores ilustrados", description: "Pequeñas obras de arte comestibles, perfectas para sorprender." },
        { icon: <Truck className="text-green-500" />, title: "Envíos a domicilio", description: "Llevamos la dulzura a tu puerta (Bucaramanga y alrededores)." },
      ];

      return (
        <PageWrapper>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Experiencias Dulces Personalizadas
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            En Dolcezza Suprema no solo vendemos alfajores, ¡creamos experiencias dulces personalizadas para ti!
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-start space-x-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="p-3 bg-rose-100 rounded-full">{React.cloneElement(service.icon, { size: 36 })}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
           <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img  
              className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl object-cover h-64 md:h-80" 
              alt="Cajitas de alfajores personalizadas"
             src="https://images.unsplash.com/photo-1636436428338-9af3061674a0" />
          </motion.div>
        </PageWrapper>
      );
    };

    export default ServiciosPage;