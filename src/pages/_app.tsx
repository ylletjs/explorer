import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
