import { Wrapper, UserName } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome,{user.name}</UserName>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </Wrapper>
  );
};
