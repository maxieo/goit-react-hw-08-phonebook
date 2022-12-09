import { useAuth } from "hooks/useAuth"
import Button from '@mui/material/Button';

export const Navigation = () => {
  const { isLoggedIn } = useAuth()
  return (
    <nav>
      <Button to ="/">
        Home
      </Button>
      { isLoggedIn && <Button to="/contacts" variant="text">Contacts</Button>}
    </nav>
  )
}