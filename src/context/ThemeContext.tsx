import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = 'khalil-theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryTheme = params.get('theme');
      if (queryTheme === 'dark' || queryTheme === 'light') {
        localStorage.setItem(STORAGE_KEY, queryTheme);
        return queryTheme;
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
      return 'light'; // Light mode is default for first-time visitors
    } catch {
      return 'light';
    }
  });

  const applyThemeToDOM = useCallback((newTheme: Theme, enableTransition = false) => {
    const root = document.documentElement;

    if (enableTransition) {
      root.classList.add('theme-transitioning');
    }

    root.setAttribute('data-theme', newTheme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#121413' : '#283C32');
    }

    if (enableTransition) {
      window.setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 250);
    }
  }, []);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch (e) {
        console.warn('Unable to persist theme to localStorage', e);
      }
      applyThemeToDOM(nextTheme, true);
    },
    [applyThemeToDOM]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  useEffect(() => {
    // Initial sync without transition jank
    applyThemeToDOM(theme, false);
  }, [theme, applyThemeToDOM]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
