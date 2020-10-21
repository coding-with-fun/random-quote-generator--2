import React from "react";
import { Route, Switch } from "react-router-dom";
import Quote from "./Quote";

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Quote} />
            </Switch>
        </div>
    );
};

export default Body;
