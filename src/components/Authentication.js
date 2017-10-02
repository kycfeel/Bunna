import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles.css'

class Authentication extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
      this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }

    render() {

      const loginView = (
      <div>

        <div className="card-content">
          <div className="row">
            <div className="input-field col s12 email">
              <label>E-Mail</label>
              <input
                name="email"
                type="email"
                className="validate"
                onChange={this.handleChange}
                value={this.state.email} />
            </div>
            <div className="input-field col s12">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="validate"
                onChange={this.handleChange}
                value={this.state.password} />
            </div>
            <button className="waves-effect waves-light btn">SUBMIT</button>
          </div>
        </div>

        <div className="footer">
          <div className="card-content">
            <div className="right">
            처음 오셨나요? <Link to="/register">지금 계정을 만들어 보세요!</Link>
            </div>
          </div>
        </div>

      </div>

      );

      const registerView = (
        <div className="card-content">
          <div className="row">
              <div className="input-field col s12 email">
                  <label>E-mail</label>
                  <input
                  name="email"
                  type="email"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email} />
              </div>
              <div className="input-field col s12">
                  <label>Password</label>
                  <input
                  name="password"
                  type="password"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.password} />
              </div>
              <button className="waves-effect waves-light btn">CREATE</button>
          </div>
        </div>
      );



        return (
            <div className="container auth">
              <Link className="logo" to="/">Bunna</Link>
              <div className="card">
                <div className="header blue white-text center">
                  <div className="card-content">{this.state.mode ? "REGISTER" : "LOGIN" }</div>
                </div>
                {this.state.mode ? registerView : loginView }
              </div>
            </div>
        );
    }
}


export default Authentication;
