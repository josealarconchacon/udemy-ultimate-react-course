import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          key={element.title}
          title={element.title}
          text={element.text}
          category={element.category}
          tags={element.tags}
          num={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
