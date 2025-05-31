import React, { useRef } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Label } from "@/components/ui/label";
    import { useToast } from '@/components/ui/use-toast';
    import PageWrapper from '@/components/shared/PageWrapper';
    import { Phone, Instagram, MapPin, Send } from 'lucide-react';

    const ContactanosPage = () => {
      const { toast } = useToast();
      const formRef = useRef(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log({ name, email, message });

        toast({
          title: "Mensaje Enviado",
          description: "Gracias por contactarnos, te responderemos pronto.",
        });
        formRef.current.reset();
      };

      return (
        <PageWrapper>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ¡Hablemos!
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ¿Quieres hacer un pedido o hablar con nosotros? ¡Estamos aquí para ti!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">Envíanos un mensaje</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Nombre</Label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Correo electrónico</Label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Mensaje</Label>
                  <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"></textarea>
                </div>
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3">
                  <Send size={18} className="mr-2" /> Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Información de Contacto</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Phone size={20} className="mr-3 text-pink-500" />
                    <a href="https://wa.me/573154549060" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">+57 3154549060 (WhatsApp)</a>
                  </li>
                  <li className="flex items-center">
                    <Instagram size={20} className="mr-3 text-pink-500" />
                    <a href="https://instagram.com/dolcezzasuprema" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">@dolcezzasuprema</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin size={20} className="mr-3 text-pink-500" />
                    <span>Bucaramanga, Santander</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Nuestra Ubicación</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-73.1305%2C7.1115%2C-73.1095%2C7.1285&layer=mapnik&marker=7.1200%2C-73.1200"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    title="Mapa de ubicación de Dolcezza Suprema"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </PageWrapper>
      );
    };

    export default ContactanosPage;