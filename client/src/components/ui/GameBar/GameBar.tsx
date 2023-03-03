import "./GameBar.scss";

const GameBar = () => {
  return (
    <div className="flex gap-4 bg-cblue1 max-w-[45rem] w-full justify-between text-3xl py-2 px-4 rounded-lg mt-4">
      <button>Easy</button>
      <button>Medium</button>
      <button>Hard</button>
    </div>
  );
};

export default GameBar;
