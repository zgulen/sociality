import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const Menu = () => {
    const { setPage } = useContext(DataContext)
    const [style, setStyle] = useState("first")


    const handleClick = (e) => {
        console.log(e.target.nextElementSibling.style.visibility)
        setStyle("second")
        if (e.target.nextElementSibling.style.visibility === 'visible'){
            e.target.nextElementSibling.style.visibility = 'hidden'
            e.target.nextElementSibling.style.display = 'none'
            e.target.children[2].src = '../icons/SeeMore.png'
            e.target.style.backgroundColor = "#393d42"
            
            
        }else{
            e.target.style.backgroundColor = "#f55661"
            e.target.nextElementSibling.style.visibility = 'visible'
            e.target.nextElementSibling.style.display = 'block'
            e.target.children[2].src = '../icons/SeeLess.png'
        }
    };
    
    const handleListClick = (event) =>{
        setPage(event.target.innerText)
        event.target.style.color === "rgb(245, 86, 97)" 
        ? event.target.style.color = "white"
        : event.target.style.color = "#f55661"
    }
    return (
        <div className="menu-container">
            <button className="accordion" onClick={handleClick} id="1"><img className="bellwave" src="../icons/Shape 1.png" alt="" /><img src="../icons/Shape 2.png" alt="" /> NOTIFICATIONS <span className="notification">29</span></button><br />
            <button onClick={handleClick} className={"accordion summary"} id="2">
                <img className="statistic-icon" src="../icons/summary1.png" alt="" /><img src="../icons/summary2.png" alt="" /> SUMMARY <img className="seemore-icon" src={"../icons/SeeMore.png"} alt="plus icon" />
            </button>
            <div className="panel">
                
            </div>
            <button onClick={handleClick} className="accordion summary" id="3">
                <img  src="../icons/publish-icon.png" alt="" /><img src="" alt="" /> PUBLISH <img className="seemore-icon2" src={"../icons/SeeMore.png"} alt="" />
            </button>
            <div className="panel">
                <div className="square"> </div>
                <ul className="publish-list" onClick={handleListClick}>
                    <li className="list-items" >Compose</li>
                    <li className="list-items" >Feed</li>
                </ul>
            </div>
            <button onClick={handleClick} className="accordion summary" id="2">
                <img className="" src="../icons/engageIcon.png" alt="" /><img src="" alt="" /> ENGAGE <img className="seemore-icon2" src={"../icons/SeeMore.png"} alt="plus icon" />
            </button>
            <div className="panel"></div>
            <button onClick={handleClick} className="accordion summary" id="2">
                <img className="" src="../icons/listenShape1.png" alt="" /><img className="listen-icon" src="../icons/listenShape2.png" alt="" /> LISTEN  <img className="seemore-icon-listen" src={"../icons/SeeMore.png"} alt="plus icon" />
            </button>
            <div className="panel"></div>
            <button onClick={handleClick} className="accordion summary" id="2">
                <img className="" src="../icons/reportIcon.png" alt="" /><img src="" alt="" /> REPORT  <img className="seemore-icon-report" src={"../icons/SeeMore.png"} alt="plus icon" />
            </button>
            <div className="panel"></div>
        </div>
    );
};

export default Menu;
