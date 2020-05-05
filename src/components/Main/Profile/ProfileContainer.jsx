import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Profile {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    middleName: state.auth.middleName,
    birthDate: state.auth.birthDate,
    snils: state.auth.snils,
    policy: state.auth.policy,
    email: state.auth.email,
    phoneNumber: state.auth.phoneNumber
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);