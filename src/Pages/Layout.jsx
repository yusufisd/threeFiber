import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      minHeight: '100vh',
      overflow: 'hidden auto'
    }}>
      {children}
      <Outlet />
    </div>
  )
}
