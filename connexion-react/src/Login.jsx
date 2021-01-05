import React from 'react';
import PropTypes from 'prop-types';
const LOGIN = 'login';
const PASSWORD = 'password';
export default class Stars extends React.PureComponent { 

    

    static propTypes = { 
        value: PropTypes.number.isRequired, 
        style: PropTypes.any 
    } 
    constructor(props) { 
        super(props);
        this.state = { login: '', password: '', redirect: null } 
    } 
    
    render() {
        return ( 
        <div className="App">
            <header className="App-header">
                <form id="loginForm" onSubmit={this.login} style={this.props.style}>
                    <span>Login: </span>
                    <input type="text" id="login" name="login"></input>
                    <br></br>
                    <span>Password: </span>
                    <input type="password" id="password" name="password"></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </header>
        </div>
        );
    }

    login(event) {
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        if((login === LOGIN) && (password === PASSWORD)){
            alert('Successfully connected');
            window.location.href = '/click';
        }
        else{
            alert('Connexion failed');
        }
        event.preventDefault();
    }
}