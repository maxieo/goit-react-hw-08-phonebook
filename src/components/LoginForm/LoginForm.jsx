import { useDispatch } from "react-redux"
import { login } from "redux/auth/operations"
import { Label, Form } from "./LoginForm.styled"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const LoginForm = () => { 
  const dispatch = useDispatch()
  const handleSubmit = e => { 
    e.preventDefault()

    const form = e.currentTarget
    dispatch(login({
      email: form.elements.email.value,
      password: form.elements.password.value
    }))
    form.reset()
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"/>
      </Label>
      <Label>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"/>
      </Label>

      <Button type="submit" variant="contained">LogIn</Button>
    </Form>
  )
}