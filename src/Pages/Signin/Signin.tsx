import {
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import * as React from 'react';
import './Signin.css';

export default class Signin extends React.Component {
  public state = {
    email: '',
    password: ''
  };

  public render() {
    return (
        <div className="container">
          <form className="login-form">
            <h2>Sign In</h2>
            <FormControl className="input-holder">
              <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="pat@buynlarge.com"
                  margin="normal"
              />
            </FormControl>
            <FormControl className="input-holder">
              <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="password"
                  margin="normal"
              />
            </FormControl>
            <FormControl>
              <Button
                  className="login"
                  variant="outlined"
                  color="primary"
                  type="submit"
              >
                Sign In
              </Button>
            </FormControl>
          </form>
        </div>
    )
  }
}