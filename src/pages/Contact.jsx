import React from "react";
import FloatingCard from "../components/card";
import "./about.css";

const Contact = () => {
  return (
    <div className="card-div">
      <FloatingCard
        title="Shreyas Shetty"
        description=":- 3rd year Student"
        imageUrl="/images/french.jpg"
      />
      <FloatingCard
        title="Sneh"
        description=":- 3rd year Student"
        imageUrl="/images/self.jpg"
      />
      <FloatingCard
        title="Mayur Udupa"
        description=":- 3rd year Student"
        imageUrl="/images/shan.jpg"
      />
    </div>
  );
};

export default Contact;
