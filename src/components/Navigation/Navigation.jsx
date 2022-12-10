import { useAuth } from "hooks/useAuth"
import { NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth()
  return (
    <nav>
      <NavigationLink type="button" to ="/">
        Home
      </NavigationLink>
      { isLoggedIn && <NavigationLink type="button" to="/contacts" variant="text">Contacts</NavigationLink>}
    </nav>
  )
}