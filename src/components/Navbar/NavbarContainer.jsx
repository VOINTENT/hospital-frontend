import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const NavbarContainer = (props) => {
    return(
        <Navbar {...props} />
    );
};

const mapStateToProps = (state) => ({
isAuth: state.auth.isAuth
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);