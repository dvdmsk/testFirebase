import Header from '@/components/Header'
import React, { type PropsWithChildren } from 'react'
import "../globals.css";

type Props = {}

export default function Layout({children}:  PropsWithChildren<unknown>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}