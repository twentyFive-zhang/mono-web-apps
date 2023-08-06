import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './global.css';

export default function RootLayout({
  Component,
}: AppProps & {
  Component: NextPage;
}) {
  return <Component></Component>;
}
