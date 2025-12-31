import React from 'react'
import './NewYearAnimation.css'

export default function NewYearAnimation() {
  // Generate confetti pieces
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 3 + Math.random() * 4,
    size: 8 + Math.random() * 6,
    color: ['#f59e0b', '#d97706', '#fbbf24', '#3b82f6', '#ef4444', '#ec4899'][Math.floor(Math.random() * 6)],
    shape: Math.random() > 0.5 ? 'rect' : 'circle'
  }))

  return (
    <div className="newyear-animation">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className={`confetti ${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color
          }}
        />
      ))}
      
      {/* Happy New Year Message */}
      <div className="happy-newyear-message">
        <span className="happy-newyear-text">🎉 Happy New Year 2026! 🎊</span>
      </div>
    </div>
  )
}