/* eslint-disable no-undef */
import data from "../utills/data.json";
import { useState } from "react";
import { dateConverter } from "../utills/date";

const Card = () => {
    const [data1] = useState(data.posts_by_date["2021-06-17"]);
    const socialIcon = (icon) => {
        if (icon === "facebook") {
            return <i class="fa-brands fa-facebook"></i>;
        } else if (icon === "twitter") {
            return <i class="fa-brands fa-twitter"></i>;
        } else {
            return <i class="fa-brands fa-instagram"></i>;
        }
    };
    return (
        <div className="card-container">
            {data1.map((e) => {
                console.log(e);
                const {
                    published_at,
                    status,
                    account: { channel },
                } = e;
                return (
                    <div className="card">
                        <div className={`status${status}`}>
                            {socialIcon(channel)}
                        </div>
                        <div>
                            <p>
                            <time datetime={published_at}>
                                {/* I didn't like this solutions but i couldn't find any  */}
                                {`
                                ${published_at.slice(8,10)} 
                                ${dateConverter(published_at.slice(5, 7))} 
                                ${published_at.slice(0,4)} - 
                                ${published_at.slice(11,16)}
                                `}
                            </time>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
