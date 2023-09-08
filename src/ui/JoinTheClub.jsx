import Button from "./Button";

function JoinTheClub() {
  return (
    <div className="bg-seashellNude">
      <div className="m-auto w-4/5 p-14 text-center">
        <h1>join the club and get 10% off your first order!</h1>
        <p className="leading-relaxed">
          Officia accusamus error maxime nihil, autem suscipit tenetur odit
          consequuntur nesciunt aliquam sit sed animi assumenda.
        </p>
        <div className="relative mx-auto w-2/4 py-3 ">
          <input
            type="text"
            className="w-full rounded-md border border-seashellPink px-3 py-3 focus:outline-seashellNude"
          />
          <Button type="join">join</Button>
        </div>
      </div>
    </div>
  );
}

export default JoinTheClub;
