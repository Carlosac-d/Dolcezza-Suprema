import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import PageWrapper from '@/components/shared/PageWrapper';

    const BlogPage = () => {
      const posts = [
        { title: "¿Cómo nacen nuestros alfajores?", image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/85ea8b1233e1e345e57fccd269adcdf6.jpg", excerpt: "Un vistazo detrás de escena a la creación de nuestras delicias artesanales." },
        { title: "Ideas de regalo con la Cajita que Abraza", image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/c3f1f671e62513e9906f4eb0dafbe776.jpg", excerpt: "Inspírate para regalar momentos dulces y personalizados." },
        { title: "Recetas artesanales favoritas", image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/de70aa52c1c1147ce7ceb9d5123429e3.jpg", excerpt: "Compartimos algunos secretos de nuestra cocina con amor." },
        { title: "Proceso creativo de nuestras ilustraciones", image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/5d5bdd1ff02bae93d5e20e48b8c4c25b.jpg", excerpt: "Descubre cómo el arte cobra vida en nuestros alfajores." },
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
            Dulces Historias y Novedades
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Tips, historias y recetas dulces para inspirarte con el sabor del amor.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Button variant="link" className="text-pink-500 hover:text-pink-700 px-0">Leer más &rarr;</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </PageWrapper>
      );
    };

    export default BlogPage;