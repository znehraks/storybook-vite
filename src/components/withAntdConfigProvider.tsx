/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider } from 'antd';
import React from 'react';
import { useTheme } from './ThemeContext';
export function withAntdConfig(WrappedComponent: React.ComponentType<any>) {
  return (props: any) => {
    const { theme } = useTheme();
    return (
      <ConfigProvider theme={theme}>
        <WrappedComponent {...props} />
      </ConfigProvider>
    );
  };
}
