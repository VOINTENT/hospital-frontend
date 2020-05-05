import React from "react";
import Login from "./Login";
import {login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";


class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);