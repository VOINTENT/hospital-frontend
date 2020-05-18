import React from "react";
import {connect} from "react-redux";
import Register from "./Register";
import {addRegister, removeRegister} from "../../../../redux/appointment-reducer";

class RegisterContainer extends React.Component{

    componentDidMount() {

    }

    render() {
        return <Register {...this.props}/>
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    addRegister,
    removeRegister
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)