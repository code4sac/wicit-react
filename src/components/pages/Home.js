import React from "react";
import Header from "../layout/Header";
import Main from "../layout/Main";
import logo from "../../assets/logo.png";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header logo={logo} alt="WICit logo" heading="WICit" />
                <Main />
            </>
        );
    }
}
