import React from 'react';
import { Link } from "react-router-dom";

import { LoginSection, FormSection, Form } from '../../layout/LoginForm';
import { HeadingSecondary } from '../../base/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '../../components/Button';

const styles = theme => ({
    textField: {
      width: '50%',
      backgroundColor: 'rgb(114, 68, 59, .4)',
      marginBottom: '3rem',
    },
  });
class Login extends React.Component {

    state = {
        email: '',
        password: ''
      };
    
      handleChange = e => event => {
        this.setState({
          [e]: event.target.value,
        });
      };
    
    render() {
        const { classes } = this.props;
        return(
            <div>
                <LoginSection>
                    <FormSection>
                        <Form>
                            <div>
                                <HeadingSecondary>Login</HeadingSecondary>
                            </div>
                            <div>
                                <TextField
                                id="outlined-email"
                                label="Email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                variant="filled"
                                />
                            </div>
                            <div>
                                <TextField
                                id="outlined-password"
                                label="Password"
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                variant="filled"
                                type="password"
                                />
                            </div>
                            <div>
                                <Button color={'white'} background={'rgb(114, 68, 59, .4)'} style={{ marginBottom: '2rem' }}>
                                    Submit
                                </Button>
                            </div>
                            <div>
                                <Link to={'/'}>
                                    <Button color={'rgb(114, 68, 59, .4)'}>
                                    Back
                                    </Button>
                                </Link>
                            </div>
                        </Form>
                    </FormSection>
                </LoginSection>
            </div>
        );
    }
}

export default withStyles(styles)(Login);