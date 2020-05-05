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

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);