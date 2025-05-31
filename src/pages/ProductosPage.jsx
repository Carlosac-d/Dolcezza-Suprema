import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Checkbox } from "@/components/ui/checkbox";
    import { Label } from "@/components/ui/label";
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
    import PageWrapper from '@/components/shared/PageWrapper';
    import { ShoppingCart } from 'lucide-react';

    const ProductosPage = () => {
      const { toast } = useToast();
      const [filter, setFilter] = useState('Todos');
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedCajitaItems, setSelectedCajitaItems] = useState({});
      
      const productos = [
        { id: 1, name: "Alfajor Clásico", price: 3000, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/8d7a83fc2c7ebae1369751ac75426e13.jpg", type: "Individual" },
        { id: 2, name: "Alfajor con Nutella", price: 3500, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/ad35440b279496c64f6bb69f0e0a844f.jpg", type: "Individual" },
        { id: 3, name: "Alfajor con ilustración personalizada", price: 5000, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/5d5bdd1ff02bae93d5e20e48b8c4c25b.jpg", type: "Individual" },
        { id: 4, name: "Cajita que Abraza (4 unidades + mensaje)", price: 15000, image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/c9a9715c-a89b-444e-836b-fd876400b69b/de70aa52c1c1147ce7ceb9d5123429e3.jpg", type: "Cajita" },
      ];

      const cajitaOptions = [
        { id: 'c1', name: "Frambuesa y frutos rojos" },
        { id: 'c2', name: "Crema Citron" },
        { id: 'c3', name: "Masmello con chocolate" },
        { id: 'c4', name: "Fresa con chocolate" },
        { id: 'c5', name: "Oreo con arequipe" },
        { id: 'c6', name: "Brownie con frutos rojos" },
        { id: 'c7', name: "M&M" },
        { id: 'c8', name: "Nueces (maní, almendra y nuez de Brasil)" },
        { id: 'c9', name: "Crema de maní con chocolate" },
      ];

      const filteredProductos = productos.filter(p => filter === 'Todos' || p.type === filter);

      const handleOrder = (productName) => {
        toast({
          title: "Pedido añadido",
          description: `${productName} ha sido añadido a tu carrito.`,
          action: <Button variant="ghost" size="sm">Ver carrito</Button>,
        });
      };

      const handleCajitaOrder = () => {
        if (Object.values(selectedCajitaItems).filter(Boolean).length !== 4) {
          toast({
            title: "Selección incompleta",
            description: "Por favor, selecciona exactamente 4 alfajores para tu Cajita que Abraza.",
            variant: "destructive",
          });
          return;
        }
        setIsModalOpen(false);
        toast({
          title: "Cajita que Abraza configurada",
          description: "Tu Cajita que Abraza personalizada ha sido añadida al carrito.",
          action: <Button variant="ghost" size="sm">Ver carrito</Button>,
        });
        setSelectedCajitaItems({}); 
      };

      const toggleCajitaItem = (itemId) => {
        setSelectedCajitaItems(prev => {
          const newSelection = {...prev};
          if (newSelection[itemId]) {
            delete newSelection[itemId];
          } else {
            if (Object.values(newSelection).filter(Boolean).length < 4) {
              newSelection[itemId] = true;
            } else {
              toast({
                title: "Límite alcanzado",
                description: "Solo puedes seleccionar 4 alfajores.",
                variant: "destructive",
              });
            }
          }
          return newSelection;
        });
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
            Nuestros Dulces Tesoros
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conoce nuestra línea de alfajores artesanales, hechos con los mejores ingredientes y presentaciones únicas.
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant={filter === 'Todos' ? 'default' : 'outline'} onClick={() => setFilter('Todos')} className="bg-pink-500 hover:bg-pink-600 text-white">Todos</Button>
            <Button variant={filter === 'Individual' ? 'default' : 'outline'} onClick={() => setFilter('Individual')} className="bg-purple-500 hover:bg-purple-600 text-white">Individuales</Button>
            <Button variant={filter === 'Cajita' ? 'default' : 'outline'} onClick={() => setFilter('Cajita')} className="bg-yellow-500 hover:bg-yellow-600 text-white">Cajitas</Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProductos.map((producto, index) => (
                <motion.div 
                  key={producto.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group"
                >
                  <div className="relative h-64">
                    <img src={producto.image} alt={producto.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{producto.name}</h3>
                    <p className="text-xl font-bold text-pink-500 mb-4">${producto.price.toLocaleString('es-CO')}</p>
                    <div className="mt-auto">
                      {producto.type === 'Cajita' ? (
                        <Button onClick={() => setIsModalOpen(true)} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5">Personalizar Cajita</Button>
                      ) : (
                        <Button onClick={() => handleOrder(producto.name)} className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2.5">
                          <ShoppingCart size={18} className="mr-2" /> Pedir Ahora
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[525px] bg-pink-50">
              <DialogHeader>
                <DialogTitle className="text-2xl text-pink-700" style={{ fontFamily: "'Playfair Display', serif" }}>Personaliza tu Cajita que Abraza</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Elige 4 alfajores para tu cajita. ¡Hazla única!
                  <span className="block mt-1 text-sm font-medium text-purple-600">
                    Seleccionados: {Object.values(selectedCajitaItems).filter(Boolean).length} de 4
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto p-1">
                {cajitaOptions.map(option => (
                  <div key={option.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-pink-200">
                    <Checkbox 
                      id={option.id} 
                      checked={!!selectedCajitaItems[option.id]}
                      onCheckedChange={() => toggleCajitaItem(option.id)}
                      className="data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                    />
                    <Label htmlFor={option.id} className="text-sm font-medium text-gray-700 cursor-pointer flex-1">{option.name}</Label>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="text-gray-700 border-gray-400">Cancelar</Button>
                <Button onClick={handleCajitaOrder} className="bg-pink-500 hover:bg-pink-600 text-white">Confirmar Selección</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </PageWrapper>
      );
    };

    export default ProductosPage;