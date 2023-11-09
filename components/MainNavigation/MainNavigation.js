import NavLinks from "./NavLinks";

function MainNavigation(props) {
  return (
    <header>
      <div className="bg-blue-500 h-16 text-white flex justify-evenly  items-center">
        <h3 className="text-xl font-bold">React Todo</h3>
        <NavLinks />
      </div>
      {props.children}
    </header>
  );
}

export default MainNavigation;
