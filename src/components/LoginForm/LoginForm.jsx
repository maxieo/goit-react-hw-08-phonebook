import { useDispatch } from "react-redux"
import { login } from "redux/auth/operations"
import { Label, Form } from "./LoginForm.styled"

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
        Email
        <input type="email" name="email"/>
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>

      <button type="submit">LogIn</button>
    </Form>
  )
}