import React, { useEffect, useState } from "react";

const LettersAnimation = ({ text }) => {
  const [animatedText, setAnimatedText] = useState(text);
  let interval = null;

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const startAnimation = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setAnimatedText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        startAnimation();
      }

      iteration += 1 / 3;
    }, 30);
  };

  return <h1 style={{ color: "white", fontSize: "5rem" }}>{animatedText}</h1>;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default LettersAnimation;
