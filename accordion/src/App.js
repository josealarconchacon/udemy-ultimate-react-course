import React from "react";
import "./styles.css";
import Accordion from "./components/Accordion";
import faqs from "./faqsData";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
