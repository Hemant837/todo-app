import Link from "next/link";

function NavLinks() {
  return (
    <ul className="font-semibold flex w-52 justify-between">
      <li>
        <Link className="hover:text-gray-200" href="/">
          Create Lodo
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-200" href="/new-todo">
          New Todo
        </Link>
      </li>
    </ul>
  );
}
export default NavLinks;
