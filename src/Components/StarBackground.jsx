import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 2,
      });
    }

    setStars(newStars);
  }

  const generateMeteors = () => {
    const numberOfMeteors = 10
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 2 + 2,
        animationDelay: `${Math.random() * 8}s`,
      });
    }

    setMeteors(newMeteors);
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          className="absolute rounded-full bg-white animate-twinkle"
          key={star.id}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.4)`,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          className="absolute bg-white rounded-full animate-meteor"
          key={meteor.id}
          style={{
            width: meteor.size + "px",
            height: meteor.size * 4 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration + "s",
            boxShadow: "0 0 10px 4px rgba(255, 255, 255, 0.3)",
          }}
        />
      ))}
    </div>
  );
};