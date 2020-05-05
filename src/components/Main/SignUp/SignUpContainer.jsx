import React from "react";
import SignUp from "./SignUp";
import {connect} from "react-redux";
import {signup} from "../../../redux/auth-reducer";


class SignUpContainer extends React.Component {

    render() {
        return <SignUp {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);