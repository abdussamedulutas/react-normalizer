import React, { Children, useEffect } from "react";
import useForm from "./utils/useForm";
import {Provider, store} from"./redux/redux";
import {render} from "react-dom";
import "./costum.scss";
import {BrowserRouter,Route,Router,Switch,Link,useHistory} from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";

function App()
{
    return <></>;
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);