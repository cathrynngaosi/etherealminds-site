import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AccordionItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="cursor-pointer border border-seashellPink"
      onClick={toggleExpanded}
    >
      <div className="flex flex-row items-center justify-between p-3 text-left">
        <h5 className="flex-1">{question}</h5>
        <div className="flex-none pl-2">
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      <div
        className={`overflow-hidden px-6 pt-0 transition-[max-height] duration-500 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left">{answer}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
