import {useState} from "react";

const Menu = () => {
    const handleClick = (e) => {
        console.log(e.target.children)
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

    const handleListClick = (e) =>{
        console.log(e.target)
    }
    return (
        <div>
            <button className="accordion" id="1"><img className="bellwave" src="../icons/Shape 1.png" alt="" /><img src="../icons/Shape 2.png" alt="" /> NOTIFICATIONS <span className="notification">29</span></button><br />
            <button onClick={handleClick} className="accordion summary" id="2">
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
                    <li className="list-items">Compose</li>
                    <li className="list-items">Feed</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
