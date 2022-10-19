import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Highlight ({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem'
      }}>
      {children}
    </span>
  )
}
