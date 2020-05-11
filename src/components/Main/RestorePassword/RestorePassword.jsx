import React from "react";
import {Route} from "react-router-dom";
import AwaitConfirm from "./AwaitConfirm/AwaitConfirm";
import SendEmailContainer from "./SendEmail/SendEmailContainer";


const RestorePassword = (props) => {
    return (
        <div>
            <Route path="/restore-password/send-email" render={ () => <SendEmailContainer/>}/>
            <Route path="/restore-password/await-confirm" render={ () => <AwaitConfirm/>}/>
        </div>
    );
};

export default RestorePassword;