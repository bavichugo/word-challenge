import BlueButton from "./BlueButton";

const NavBar = () => {
  return (
    <div className="flex w-full bg-black h-16 items-center justify-center">
      <div className="flex justify-between max-w-cmax w-full items-center">
        <h1 className="text-xl">Wordyyy</h1>
        <div className="flex gap-x-4">
          <BlueButton className="font-semibold" isFull={true} type="button">Sign up!</BlueButton>
          <BlueButton className="font-semibold" isFull={false} type="button">Login</BlueButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
