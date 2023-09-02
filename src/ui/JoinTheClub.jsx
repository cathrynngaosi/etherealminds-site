function JoinTheClub() {
  return (
    <section className="bg-seashellNude">
      <div className="p-14 text-center w-4/5 m-auto">
        <h1>join the club and get 10% off your first order!</h1>
        <p className="leading-relaxed">
          Officia accusamus error maxime nihil, autem suscipit tenetur odit
          consequuntur nesciunt aliquam sit sed animi assumenda.
        </p>
        <div className="w-2/4 mx-auto py-3 relative ">
          <input
            type="text"
            className="w-full py-3 rounded-md px-3 focus:outline-seashellNude border border-seashellPink"
          />
          <button className="bg-mediumBrown text-white px-6 py-1.5 text-sm rounded absolute right-2 top-[20px] font-medium">
            join
          </button>
        </div>
      </div>
    </section>
  );
}

export default JoinTheClub;
