import { useEffect, useState } from 'react';

const StarryBackground = () => {
  type Star = {
    top: string;
    left: string;
    animationDelay: string;
  };
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(100)].map(() => ({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 10}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="starry-background">
      {stars.map((star, i) => (
        <div
          key={i}
          className="stars"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarryBackground;