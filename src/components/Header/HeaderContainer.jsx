import React from "react";
import Header from "./Header";
import {getUserData, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,

});

const mapDispatchToProps = {
    getUserData,
    logout

};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);