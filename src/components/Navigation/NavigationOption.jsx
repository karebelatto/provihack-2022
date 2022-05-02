import { Link } from "react-router-dom";

export function NavigationOption({ option }) {
  return (
    <li>
      <Link to="/">{option}</Link>
    </li>
  );
}
