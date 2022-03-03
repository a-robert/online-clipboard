import {Button, FormControl, FormHelperText, Input, InputLabel} from '@mui/material';

const {useNavigate, useLocation} = require('react-router-dom');
const {useAuth} = require('../Auth/AuthProvider');

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  let from = location.state?.from?.pathname || '/clipboard';

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');

    auth.signIn(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, {replace: true});
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <FormControl onSubmit={handleSubmit}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input name="username" id="username" aria-describedby="my-helper-text" />
        <FormHelperText id="username-helper-text">We'll never share your username.</FormHelperText>

        <Button type="submit">Login</Button>
      </FormControl>
    </div>
  );
}