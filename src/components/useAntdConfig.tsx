/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider } from 'antd';
import React from 'react';
import theme from './config';
export function withAntdConfig(WrappedComponent: React.ComponentType<any>) {
  return (props: any) => (
    <ConfigProvider theme={theme}>
      <WrappedComponent {...props} />
    </ConfigProvider>
  );
}
