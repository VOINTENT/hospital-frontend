import React from "react";
import {connect} from "react-redux";
import Register from "./Register";

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

};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)