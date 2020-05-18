import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getMyRegistersData} from "../../../redux/appointment-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getMyRegistersData()
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
    gender: state.auth.gender,
    birthDate: state.auth.birthDate,
    snils: state.auth.snils,
    policy: state.auth.policy,
    email: state.auth.email,
    phoneNumber: state.auth.phoneNumber,
    myRegisters: state.appointment.myRegisters
});

const mapDispatchToProps = {
    getMyRegistersData
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);