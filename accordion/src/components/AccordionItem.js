import React, { useState } from "react";

function AccordionItem({ num, title, text, category, tags }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <>
          <div className="content-box">{text}</div>
          <div className="category">
            Category: <span>{category}</span>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AccordionItem;
