'use client';
import React from 'react';
import UIProvider from './ui';

export {default as FormProvider} from './form';

const Provider = ({children}) => (
  <UIProvider>
    {children}
  </UIProvider>
);

export default Provider;