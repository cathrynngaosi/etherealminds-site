import { useLoaderData } from "react-router-dom";
import { getFAQs } from "../services/apiShop";
import Accordion from "../features/faqs/Accordion";

function FAQs() {
  const faqs = useLoaderData();
  const categories = [...new Set(faqs.map((item) => item.category))];

  return (
    <section className="px-10 py-5">
      <h1 className="mb-5 uppercase">Frequently Asked Questions</h1>

      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        {categories.map((category) => (
          <Accordion category={category} key={category} faqs={faqs} />
        ))}
      </div>
    </section>
  );
}

export async function loader() {
  const collections = await getFAQs();
  return collections;
}

export default FAQs;
