import React from "react";
import Edit from "./Edit";
import {edit} from "../../../../redux/auth-reducer";
import {connect} from "react-redux";


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
    phoneNumber: state.auth.phoneNumber
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);