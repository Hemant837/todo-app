import Link from "next/link";
import NavLinks from "./NavLinks";

function MainNavigation() {
  return (
    <header className="bg-blue-500 h-16 text-white flex justify-evenly  items-center">
      <h3 className="text-xl font-bold">React Todo</h3>
      <NavLinks />
    </header>
  );
}

export default MainNavigation;
