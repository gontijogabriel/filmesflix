import React from 'react';

interface CircleRatingProps {
  rating: number; // A nota do filme (0-100)
  tamanho: number; // Tamanho do círculo
}

const CircleRating: React.FC<CircleRatingProps> = ({ rating, tamanho }) => {
  const raio = tamanho / 2 - 5; // Raio interno
  const circunferencia = 2 * Math.PI * raio;
  const percentagemPreenchida = (rating / 100) * circunferencia;

  // Calcula a cor com base na nota
  const cor = `rgb(${255 - (rating * 255) / 100}, ${(rating * 255) / 100}, 0)`;

  return (
    <div className="circle-rating" style={{ width: tamanho, height: tamanho }}>
      <svg width={tamanho} height={tamanho}>
        <circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          fill="transparent"
          stroke={cor} // Cor da borda
          strokeWidth="7" // Largura da borda
          strokeDasharray={percentagemPreenchida + ' ' + circunferencia}
          strokeLinejoin="round"
        />
      </svg>
      <div className="rating-text">{rating}%</div>
      <style jsx>{`
        .circle-rating {
          display: inline-block;
          position: relative;
          border-radius: 50%; // Arredonda a div
        }

        .rating-text {
          position: absolute;
          border-radius: 50%; // Arredonda a div
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default CircleRating;
