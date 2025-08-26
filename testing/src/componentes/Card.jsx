import React, { useState } from 'react';
import './Card.css';

// Componente Card que demuestra todos los tipos de props:
// 1. Props con valores (userName, onFollow)
// 2. Props con funciones (formatUserName, onCardClick)
// 3. Props con children (contenido entre las etiquetas)
function Card({ 
  userName,           // Prop con valor (string)
  onFollow,          // Prop con valor (string)
  formatUserName,    // Prop con función
  onCardClick,       // Prop con función (opcional)
  children           // Prop children (contenido entre etiquetas)
}) {
  // Estado local para manejar si está siguiendo o no
  const [isFollowing, setIsFollowing] = useState(onFollow === 'true');

  // Función que maneja el clic en el botón de seguir
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // Función que maneja el clic en toda la tarjeta (si se proporciona)
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(userName);
    }
  };

  // Usa la función formatUserName si se proporciona, sino usa el nombre original
  const formattedName = formatUserName ? formatUserName(userName) : userName;

  return (
    <div 
      className="card" 
      onClick={handleCardClick}
      style={{ cursor: onCardClick ? 'pointer' : 'default' }}
    >
      {/* Header de la tarjeta con avatar y información del usuario */}
      <div className="card-header">
        <img 
          src={`https://unavatar.io/${userName}`} 
          alt={`Avatar de ${userName}`}
          className="avatar"
        />
        <div className="user-info">
          <h3 className="user-name">{formattedName}</h3>
          <span className="user-handle">@{userName}</span>
        </div>
      </div>
      
      {/* Contenido de la tarjeta - aquí van los children */}
      <div className="card-content">
        {children}
      </div>
      
      {/* Footer con botón de seguir */}
      <div className="card-footer">
        <button 
          onClick={handleFollow}
          className={`follow-button ${isFollowing ? 'following' : 'follow'}`}
        >
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </div>
    </div>
  );
}

export default Card;
