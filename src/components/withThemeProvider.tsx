/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ThemeProvider } from './ThemeContext';
export function withThemeProvider(WrappedComponent: React.ComponentType<any>) {
  return (props: any) => {
    return (
      <ThemeProvider>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
}
