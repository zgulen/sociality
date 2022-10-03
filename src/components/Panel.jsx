import React from "react";
import Description from "./Description";
import Card from "./Card";
import Logo from "./Logo";
import SidebarLogos from "./SidebarLogos";
import Menu from "./Menu";
const Panel = () => {
    return (
        <>
            <div>
                <Logo />
                <div
                    style={{
                        display: "flex",
                        height: "100%",
                        background: "#393d42",
                    }}
                >
                    <SidebarLogos />
                    <Menu />
                </div>
            </div>
            <div>
                <Description />
                <Card />
            </div>
        </>
    );
};

export default Panel;
