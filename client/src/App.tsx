import GameBar from "./components/ui/GameBar/GameBar";
import NavBar from "./components/ui/NavBar";

const App = () => {
  return (
    <div className="flex flex-col h-full bg-cblue-main items-center">
      <NavBar />
      <GameBar />
    </div>
  );
}

export default App;
