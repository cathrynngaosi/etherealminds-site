function OrderSteps() {
  return (
    <section className="bg-seashellPink p-10">
      <div className="m-auto mb-3 w-4/5 text-center">
        <h1>make it uniquely yours!</h1>
      </div>
      <div className="flex flex-col space-y-8 md:mx-5 md:flex-row md:space-x-16 md:space-y-0">
        <div className="space-y-2 text-center md:w-1/4">
          <div>
            <h2 className="text-2xl font-medium">1</h2>
            <h2 className="text-lg font-medium">Choose an item</h2>
          </div>
          <p className="font-light">
            choose from our collection of items - from tumblers to mugs to
            jewelry boxes, and more soon!
          </p>
        </div>
        <div className="space-y-2 text-center md:w-1/4">
          <div>
            <h2 className="text-2xl font-medium">2</h2>
            <h2 className="text-lg font-medium">Say what?!</h2>
          </div>
          <p className="font-light">
            your custom text can be your name, your favorite quote, or anything
            under the sun!
          </p>
        </div>
        <div className="space-y-2 text-center md:w-1/4">
          <div>
            <h2 className="text-2xl font-medium">3</h2>
            <h2 className="text-lg font-medium">Choose a font & decal color</h2>
          </div>
          <p className="font-light">
            select a font & color that best represents you!
          </p>
        </div>
        <div className="space-y-2 text-center md:w-1/4">
          <div>
            <h2 className="text-2xl font-medium">4</h2>
            <h2 className="text-lg font-medium">Send your order!</h2>
          </div>
          <p className="font-light">
            we&apos;ll work on it and have it sent to you in 7-14 days!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderSteps;
