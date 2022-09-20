import {useState} from "react";

const Menu = () => {
    const [accordion, setAccordion] = useState(true)
    const [target, setTarget] = useState("")
    const handleClick = (e) => {
        setAccordion(!accordion)
        setTarget(e.target.id)
        console.log(e.target.nextElementSibling.style.visibility)
        if (e.target.nextElementSibling.style.visibility === 'visible'){
            e.target.nextElementSibling.style.visibility = 'hidden'
            e.target.nextElementSibling.style.display = 'none'
        }else{
            e.target.nextElementSibling.style.visibility = 'visible'
            e.target.nextElementSibling.style.display = 'block'
        }
        
    };
    const condition = (e) =>{
        console.log(e === target);
        return e === target
    }
    return (
        <div>
            <button className="accordion" id="1"><img className="bellwave" src="../icons/Shape 1.png" alt="" /><img src="../icons/Shape 2.png" alt="" /> NOTIFICATIONS <span className="notification">29</span></button><br />
            <button onClick={handleClick} className="accordion summary" id="2">
                <img className="statistic-icon" src="../icons/summary1.png" alt="" /><img src="../icons/summary2.png" alt="" /> SUMMARY <img className="seemore-icon" src={condition("2") ? "../icons/SeeLess.png" : "../icons/SeeMore.png"} alt="plus icon" />
            </button>
            <div className="panel">
                asdasd
            </div>
            <button onClick={handleClick} className="accordion summary" id="3">
                <img className="statistic-icon" src="../icons/summary1.png" alt="" /><img src="../icons/summary2.png" alt="" /> SUMMARY <img className="seemore-icon" src={accordion ? "../icons/SeeMore.png" : "../icons/SeeLess.png"} alt="" />
            </button>
            <div className="panel">
                Seemore
            </div>
        </div>
    );
};

export default Menu;
