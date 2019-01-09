import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import SignInStyleWrapper from './index.style';

const { login } = authAction;
class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: '',
    password: '',
  };

  componentWillReceiveProps(nextProps) {
    const { isLoggedIn: nextIsLoggedIn } = nextProps;
    const { isLoggedIn } = this.props;
    if (isLoggedIn !== nextIsLoggedIn && nextIsLoggedIn === true) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const { login } = this.props; // eslint-disable-line
    login({
      email: username,
      password,
    });
  };

  onUsernameChange = ev => {
    this.setState({ username: ev.target.value });
  };

  onPasswordChange = ev => {
    this.setState({ password: ev.target.value });
  };

  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;
    const { loading } = this.props;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <h1>Actual CEDIS</h1>
            </div>

            <form onSubmit={this.handleLogin} className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input
                  disabled={loading}
                  onPressEnter={this.handleLogin}
                  onChange={this.onUsernameChange}
                  size="large"
                  placeholder="Username"
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  disabled={loading}
                  onPressEnter={this.handleLogin}
                  onChange={this.onPasswordChange}
                  size="large"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Button
                  loading={loading}
                  type="primary"
                  onClick={this.handleLogin}
                >
                  Iniciar sesión
                </Button>
              </div>

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  Olvide mi contraseña
                </Link>
              </div>
            </form>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null,
    loading: state.Auth.get('loading'),
  }),
  { login }
)(SignIn);
