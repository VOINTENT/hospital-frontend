import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import MainContainer from "./components/Main/MainContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

class App extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <MainContainer/>
            </div>
        );
    }
}

export default App;
