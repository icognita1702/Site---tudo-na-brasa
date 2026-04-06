import React, { useState } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img 
        src="/logo.png" 
        alt="Tudo na Brasa Logo" 
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="topCurve" d="M 50 70 A 60 60 0 0 1 150 70" />
        <path id="ribbonCurve" d="M 40 160 Q 100 150 160 160" />
        <style>
          {`
            .script-font { font-family: 'Playfair Display', cursive, serif; }
            .brush-font { font-family: 'Brush Script MT', 'Pacifico', cursive; }
          `}
        </style>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="95" fill="#f03a3a" />
      
      {/* White Border */}
      <circle cx="100" cy="100" r="85" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="400 100" strokeDashoffset="190" strokeLinecap="round" />

      {/* Desde 2005 */}
      <text fill="#ffffff" className="script-font" fontSize="16" fontWeight="bold" letterSpacing="1">
        <textPath href="#topCurve" startOffset="50%" textAnchor="middle">Desde 2005</textPath>
      </text>

      {/* Tudo na */}
      <text x="100" y="90" fill="#ffffff" className="brush-font" fontSize="28" textAnchor="middle" transform="rotate(-5, 100, 90)">Tudo na</text>
      
      {/* Brasa */}
      <text x="100" y="135" fill="#ffffff" className="brush-font" fontSize="48" textAnchor="middle" transform="rotate(-5, 100, 135)">Brasa</text>
      
      {/* Swash under Brasa */}
      <path d="M 45 145 Q 100 165 165 125 Q 100 155 45 145 Z" fill="#ffffff" />

      {/* Ribbon */}
      <path d="M 20 175 L 35 155 L 45 160 Z" fill="#b5952f" />
      <path d="M 180 175 L 165 155 L 155 160 Z" fill="#b5952f" />
      <path d="M 30 165 Q 100 145 170 165 L 165 185 Q 100 165 35 185 Z" fill="#d4af37" />
      
      {/* Carnes e Pizzas */}
      <text x="100" y="178" fill="#1a1a1a" className="script-font" fontSize="16" fontWeight="bold" textAnchor="middle" transform="rotate(-3, 100, 178)">Carnes e Pizzas</text>
    </svg>
  );
};
