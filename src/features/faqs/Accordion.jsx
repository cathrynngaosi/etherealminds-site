import AccordionItem from "./AccordionItem";

function Accordion({ category, faqs }) {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="rounded-tl-lg rounded-tr-lg bg-seashellPink p-3 font-semibold capitalize">
        {category}
      </h2>
      {faqs
        .filter((faq) => faq.category === "products")
        .map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
    </div>
  );
}

export default Accordion;
