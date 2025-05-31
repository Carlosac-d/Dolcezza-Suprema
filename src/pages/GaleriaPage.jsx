import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/shared/PageWrapper';
import { Youtube } from 'lucide-react';

const GaleriaPage = () => {
  return (
    <PageWrapper>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-600"
        style={{ fontFamily: "'Playfair Display', serif" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Galería Multimedia
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Mira cómo combinamos arte, juego y tecnología para enamorar a nuestros clientes. Explora nuestra galería interactiva:
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Videojuego Scratch */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Videojuego en Scratch</h2>
          <p className="text-gray-600 mb-4">
            Juega nuestro videojuego interactivo desarrollado en Scratch (TurboWarp). ¡Haz clic abajo para jugar en una nueva pestaña!
          </p>
          <a 
            href="https://turbowarp.org/1169893252" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://cdn2.scratch.mit.edu/get_image/project/1169893252_480x360.png"
              alt="Vista previa del videojuego en Scratch"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Jugar ahora
            </Button>
          </a>
        </motion.div>

        {/* App Inventor */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">App en App Inventor</h2>
          <p className="text-gray-600 mb-4">
            Descubre nuestra aplicación móvil interactiva. Descárgala y pruébala en tu Android.
          </p>
          <a href="/media/mi-app.apk" download>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Descargar App (.apk)</Button>
          </a>
          <div className="mt-4">
            <img  
              className="w-full h-48 object-contain rounded-md" 
              alt="Preview de la App Inventor"
              src="https://images.unsplash.com/photo-1552552492-9c335658343d" 
            />
          </div>
        </motion.div>

        {/* Presentación Genially */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Presentación Genially</h2>
          <p className="text-gray-600 mb-4">Explora nuestra presentación interactiva. (Enlace próximamente)</p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white" disabled>Ver Presentación (Próximamente)</Button>
          <div className="mt-4">
            <img  
              className="w-full h-48 object-contain rounded-md" 
              alt="Preview de la presentación Genially"
              src="https://images.unsplash.com/photo-1601651514327-8702c4f2ade0" 
            />
          </div>
        </motion.div>

        {/* Video Promocional */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Video Promocional</h2>
          <p className="text-gray-600 mb-4">Disfruta de nuestro video promocional.</p>
          <video 
            controls 
            className="w-full rounded-md shadow-md"
            poster="/media/poster-video.jpg"
          >
            <source src="/media/video-promocional.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </motion.div>

        {/* Encuesta Kahoot */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Encuesta Interactiva</h2>
          <p className="text-gray-600 mb-4">
            Responde nuestra encuesta divertida en Kahoot y ayúdanos a mejorar tu experiencia con Dolcezza Suprema.
          </p>
          <a 
            href="https://create.kahoot.it/share/dolcezza-suprema/7aecf87b-80e3-44d3-9dcb-2d4eb9adcb3a" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://play.kahoot.it/static/media/og-image.40f45752.png"
              alt="Vista previa de la encuesta en Kahoot"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Responder Encuesta
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Galería de imágenes */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img className="rounded-lg shadow-md object-cover aspect-square" alt="Alfajor decorado con M&Ms" src="https://images.unsplash.com/photo-1502855615030-6277e9064892" />
        <img className="rounded-lg shadow-md object-cover aspect-square" alt="Caja de alfajores para regalo" src="https://images.unsplash.com/photo-1552552492-9c335658343d" />
        <img className="rounded-lg shadow-md object-cover aspect-square col-span-2 md:col-span-1" alt="Alfajores con diseño de corazón" src="https://images.unsplash.com/photo-1663145100483-ddd00196ad0f" />
      </div>
    </PageWrapper>
  );
};

export default GaleriaPage;

