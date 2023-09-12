import Button from "./Button";

function JoinTheClub() {
  return (
    <div className="bg-seashellNude">
      <div className="m-auto p-10 text-center md:w-4/5 md:p-14">
        <h1>join the club and get 10% off your first order!</h1>
        <p className="leading-relaxed">
          sign up to receive weekly newsletter updates, exclusive deals, and be
          first to know about new products and special promotions
        </p>
        <div className="relative mx-auto py-3 md:w-2/4 ">
          <input
            type="text"
            placeholder="email address"
            className="w-full rounded-md border border-seashellPink px-3 py-3 placeholder:text-lightBrown focus:outline-seashellNude"
          />
          <Button type="join">join</Button>
        </div>
      </div>
    </div>
  );
}

export default JoinTheClub;
