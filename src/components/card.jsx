import React from "react";
import { motion } from "framer-motion";
import "./card.css";

const FloatingCard = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="card"
      initial={{ y: 0 }}
      animate={{
        y: [0, -50, 0], // Floating animation
        boxShadow: [
          "0px 10px 30px rgba(0, 0, 0, 0.1)",
          "0px 20px 50px rgba(0, 0, 0, 0.2)",
          "0px 10px 30px rgba(0, 0, 0, 0.1)",
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 25px 60px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Image */}
      <img src={imageUrl}  className="card-image" />

      {/* Text Content */}
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
    </motion.div>
  );
};

export default FloatingCard;
