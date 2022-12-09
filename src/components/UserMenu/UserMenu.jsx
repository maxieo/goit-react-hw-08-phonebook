import { Wrapper, UserName } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" variant="outlined" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Wrapper>
  );
};
