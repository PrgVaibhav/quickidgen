import generateRandomId from "quickidgen";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const routes = [
    {
      id: generateRandomId(),
      name: "Home",
      path: "/",
    },
    {
      id: generateRandomId(),
      name: "Get Started",
      path: "/get-started",
    },
    {
      id: generateRandomId(),
      name: "Changelogs",
      path: "/changelogs",
    },
  ];
  return (
    <nav className="md:mt-4">
      <ul className="flex gap-4 justify-end items-end">
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink to={route.path} key={route.id}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
