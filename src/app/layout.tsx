import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenCourse :: open source teaching platform',
  description: '100% open source learning and teaching platform',
}

import './global.scss';

import Layout from '../layout';
import Provider from '../providers';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Layout>
            {children}
          </Layout>
        </Provider>
      </body>
    </html>
  )
}
