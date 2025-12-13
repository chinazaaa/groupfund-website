import React from 'react'
import '../App.css'

export default function ComingSoonModal({ isOpen, onClose, storeName }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-body">
          <div className="modal-icon">🚀</div>
          <h2 className="modal-title">Coming Soon!</h2>
          <p className="modal-message">
            The GroupFund app will be available on <strong>{storeName}</strong> soon. Stay tuned for updates!
          </p>
          <button className="btn btn-primary" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
