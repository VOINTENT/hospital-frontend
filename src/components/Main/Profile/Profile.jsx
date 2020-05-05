import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    if (!props.isAuth) {
        return <Redirect to="/login"/>
    }
    
    return (
        <div>
            <h3>Личный кабинет</h3>
        </div>
    );
};

export default Profile;