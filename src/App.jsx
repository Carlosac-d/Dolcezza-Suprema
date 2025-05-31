import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import MainLayout from '@/layouts/MainLayout';
    import HomePage from '@/pages/HomePage';
    import NosotrosPage from '@/pages/NosotrosPage';
    import ServiciosPage from '@/pages/ServiciosPage';
    import ProductosPage from '@/pages/ProductosPage';
    import GaleriaPage from '@/pages/GaleriaPage';
    import ContactanosPage from '@/pages/ContactanosPage';
    import BlogPage from '@/pages/BlogPage';
    
    const App = () => {
      return (
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/galeria" element={<GaleriaPage />} />
              <Route path="/contactanos" element={<ContactanosPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </MainLayout>
        </Router>
      );
    };

    export default App;