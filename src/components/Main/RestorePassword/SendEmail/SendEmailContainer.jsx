import React from "react";

import {connect} from "react-redux";
import SendEmail from "./SendEmail";
import {restorePassword} from "../../../../redux/auth-reducer";

class SendEmailContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <SendEmail {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    restorePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(SendEmailContainer);