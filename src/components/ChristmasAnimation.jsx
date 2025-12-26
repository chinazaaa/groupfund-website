import React from 'react'
import './ChristmasAnimation.css'

export default function ChristmasAnimation() {
  // Generate snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 3 + Math.random() * 4,
    size: 4 + Math.random() * 4
  }))

  return (
    <div className="christmas-animation">
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${flake.animationDuration}s`,
            fontSize: `${flake.size}px`
          }}
        >
          ❄
        </div>
      ))}
      
      {/* Merry Christmas Message */}
      <div className="merry-christmas-message">
        <span className="merry-christmas-text">🎄 Merry Christmas!</span>
      </div>
    </div>
  )
}

