import React from "react";
import Edit from "./Edit";
import {connect} from "react-redux";
import {updateUserData} from "../../../../redux/auth-reducer";


class EditContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Edit {...this.props}/>
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
    gender: state.auth.gender,
    phoneNumber: state.auth.phoneNumber
});

const mapDispatchToProps = {
    updateUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);