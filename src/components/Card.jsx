/* eslint-disable no-undef */
import data from "../utills/data.json";
import { useState } from "react";
import { dateConverter } from "../utills/date";

const Card = () => {
    const [data0617] = useState(data.posts_by_date["2021-06-17"]);
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
            {data0617?.map((e) => {
                console.log(e);
                const {
                    published_at,
                    status,
                    account: { channel },
                    is_published,
                    entry: { message },
                    entry: { image },
                } = e;
                return (
                    <div className="card">
                        <div className="card-type">
                            <div className={`status status${status}`}>
                                {socialIcon(channel)}
                            </div>
                        </div>
                        <div className="time-icons">
                            <p className="publish-time">
                                <time datetime={published_at}>
                                    {/* I didn't like this solutions but i couldn't find any  */}
                                    {`
                                ${published_at.slice(8, 10)} 
                                ${dateConverter(published_at.slice(5, 7))} 
                                ${published_at.slice(0, 4)} - 
                                ${published_at.slice(11, 16)}
                                `}
                                </time>
                            </p>
                            <div className="card-icons">
                                <span>
                                    {is_published || (
                                        <img
                                            src="../icons/cancel.png"
                                            alt="cancel icon"
                                        ></img>
                                    )}
                                </span>
                                <span>
                                    <img
                                        src="../icons/delete.png"
                                        alt="delete icon"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="../icons/options.png"
                                        alt="options icon"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="card-entry">
                            <p>{message.slice(0, message.indexOf('http'))} <a href="/">{message.slice(message.search('http'))}</a></p>
                            <img
                                width={288}
                                src={image[0]}
                                onError={({ currentTarget }) => {
                                    console.log(currentTarget);
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "../nopostimg/no-post-image.png";
                                }}
                                alt="post"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
