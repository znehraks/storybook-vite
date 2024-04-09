/* eslint-disable react-refresh/only-export-components */
// ThemeContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import defaultTheme from './config'; // 기본 theme 설정을 import합니다.
import { ThemeConfig } from 'antd';

interface ThemeContextType {
  theme: ThemeConfig;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  theme: initialTheme = defaultTheme,
}: {
  children: ReactNode;
  theme?: typeof defaultTheme;
}) {
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default {
  ThemeProvider,
  useTheme,
};
