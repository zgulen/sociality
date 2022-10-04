import {useContext} from "react";
import Description from "./Description";
import Logo from "./Logo";
import SidebarLogos from "./SidebarLogos";
import Menu from "./Menu";
import { menu } from "../utills/menuFunction";
import { DataContext } from "../context/DataContext";

const Panel = () => {
    const style = {display: "flex",height: "100%",background: "#393d42",}
    const { page } = useContext(DataContext)

    return (
        <>
            <div>
                <Logo />
                <div style={style}>
                    <SidebarLogos />
                    <Menu />
                </div>
            </div>
            <div>
                <Description />
                {menu(page)}
            </div>
        </>
    );
};

export default Panel;
