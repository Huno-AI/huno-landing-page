/**
 * Theme Context
 * Manages day/night mode state across the app
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { colors } from '../constants/tokens';

type ThemeMode = 'day' | 'night' | 'auto';

interface ThemeContextValue {
  mode: ThemeMode;
  isDarkMode: boolean;
  setMode: (mode: ThemeMode) => void;
  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    divider: string;
  };
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('day');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (mode === 'auto') {
      // Auto mode: based on time of day (6 PM to 6 AM = night)
      const hour = new Date().getHours();
      setIsDarkMode(hour >= 18 || hour < 6);
    } else {
      setIsDarkMode(mode === 'night');
    }
  }, [mode]);

  const themeColors = {
    background: isDarkMode ? colors.surface.baseNight : colors.surface.baseDay,
    surface: isDarkMode ? colors.surface.elevatedNight : colors.surface.elevatedDay,
    text: isDarkMode ? colors.text.inverse : colors.text.primary,
    textSecondary: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : colors.text.secondary,
    divider: isDarkMode ? colors.stroke.dividerNight : colors.stroke.dividerDay,
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        isDarkMode,
        setMode,
        colors: themeColors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
