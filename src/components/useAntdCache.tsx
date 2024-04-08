/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import React from 'react';

export function withAntdCache(WrappedComponent: React.ComponentType<any>) {
  const cache = createCache();
  const style = extractStyle(cache, true);
  return (props: any) => (
    <StyleProvider cache={cache}>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <WrappedComponent {...props} />
    </StyleProvider>
  );
}
