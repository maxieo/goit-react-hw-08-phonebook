import { NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <nav>
      <NavLink to ="/">
        Home
      </NavLink>
      <NavLink to ="/phonebook">
        Phonebook
      </NavLink>
    </nav>
  )
}