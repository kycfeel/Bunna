import React from 'react';
import { Link } from 'react-router-dom';
import { auth, googleAuth } from '../firebase/conf.js'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin() {
  auth.signInWithPopup(googleAuth)
    .then((result) => {
      console.log(result);
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  handleLogout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {

    const loginButton = (
      <li>
        <a>
          <i onClick={this.handleLogin} className="material-icons">vpn_key</i>
        </a>
      </li>
   );

   const logoutButton = (
     <li>
       <a>
         <i onClick={this.handleLogout} className="material-icons">lock_open</i>
       </a>
     </li>
   );

    return (

      <nav>
        <div className="nav-wrapper blue darken-1">
            <Link to ="/" className="brand-logo center">Bunna</Link>

            <ul>
                <li><a><i className="material-icons">search</i></a></li>
            </ul>

            <div className="right">
                <ul>
                    { this.state.user ? logoutButton : loginButton }
                </ul>
            </div>
        </div>
    </nav>

    );
  }
}

export default Header;
