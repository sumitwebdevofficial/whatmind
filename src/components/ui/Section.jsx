import React, { Children } from "react";

const Section = ({ id, children, className, isLast }) => {
  // if (isLast ==="true")
  return (
    <section id={id} className={`bg-dark relative ${isLast === "true" ? "pb-8 lg:pb-16" : "pb-24 lg:pb-48"} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
