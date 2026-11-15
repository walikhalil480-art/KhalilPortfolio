import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

import { pageTransitionVariants } from '../styles/motion';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransitionVariants}
          initial={shouldReduceMotion ? 'animate' : 'initial'}
          animate="animate"
          exit={shouldReduceMotion ? undefined : 'exit'}
          style={{ minHeight: 'calc(100vh - 160px)', overflowX: 'hidden' }}
        >
          {children || <Outlet />}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};
