import React from 'react'
import './ClientRbfcuBack.scss'

const ClientRbfcuBack = ({ className, children }) => {
  return (
    <div className="RbfcuGradient">
      <div className="clientRbfcuBack">{children}</div>
    </div>
  )
}

export default ClientRbfcuBack
