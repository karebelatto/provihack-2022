import { NavigationOption } from "./NavigationOption";

export function NavigationContainer() {
  return (
    <ul className="nav-options-container">
      <NavigationOption option="Home" />
      <NavigationOption option="Projeto" />
      <NavigationOption option="Contato" />
    </ul>
  );
}
