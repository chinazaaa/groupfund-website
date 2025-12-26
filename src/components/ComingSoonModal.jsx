import React, { memo } from 'react'
import '../App.css'

function ComingSoonModal({ isOpen, onClose, storeName }) {
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
          <p className="modal-message" style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#666' }}>
            In the meantime, you can start using GroupFund on web right now!
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexDirection: 'column' }}>
            <a 
              href="https://app.groupfund.app/signup" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              Start with Web
            </a>
            <button className="btn btn-secondary" onClick={onClose}>
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ComingSoonModal)
