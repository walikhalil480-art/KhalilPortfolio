import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/', exact: true },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Experience', path: '/experience' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        {/* Left: Brand Logo */}
        <Link to="/" className="brand" aria-label="Khalil Wali Home" onClick={closeMobileMenu}>
          <span className="brand-name">Khalil <em>Wali</em></span>
        </Link>

        {/* Centre: Primary Navigation */}
        <nav className="main-nav" aria-label="Primary Navigation">
          {navItems.map((item) => {
            const isActive = item.exact
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="header-actions">
          {/* Elegant Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -35, opacity: 0, scale: 0.75 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 35, opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {theme === 'dark' ? (
                  <Sun size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Moon size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link to="/contact" className="btn-header-inquiry" onClick={closeMobileMenu}>
            <span>Get in Touch</span>
            <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
          </Link>

          <button
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-nav-list" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mobile-nav-action" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="button"
                  className="mobile-theme-switch-btn"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={15} strokeWidth={2} aria-hidden="true" />
                      <span>Switch to Light Theme</span>
                    </>
                  ) : (
                    <>
                      <Moon size={15} strokeWidth={2} aria-hidden="true" />
                      <span>Switch to Dark Theme</span>
                    </>
                  )}
                </button>

                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMobileMenu}>
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
