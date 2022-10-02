import React from "react";
import { dateConverter } from "../utills/date";
import { socialIcon } from "../utills/iconF";

const Card2 = ({ data0617 }) => {
    return (
        <div>
            <div>
                <h3 className="post-date">{`${data0617[0].published_at.slice(
                    8,
                    10
                )} 
                                ${dateConverter(
                                    data0617[0].published_at.slice(5, 7)
                                )} 
                                ${data0617[0].published_at.slice(0, 4)}`}</h3>
                <div className="card-container">
                    {data0617?.map((e, index) => {
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
                            <div className="card" key={index}>
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
                                    <p>
                                        {message.slice(
                                            0,
                                            message.indexOf("http")
                                        )}{" "}
                                        <a href="/">
                                            {message.slice(
                                                message.search("http")
                                            )}
                                        </a>
                                    </p>
                                    <img
                                        width={288}
                                        src={image[0]}
                                        onError={({ currentTarget }) => {
                                            console.log(currentTarget);
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src =
                                                "../nopostimg/no-post-image.png";
                                        }}
                                        alt="post"
                                    />
                                </div>
                                <div className="statistics-icons">
                                    <img
                                        src={
                                            channel === "twitter"
                                                ? "../icons/heart copy.png"
                                                : "../icons/likes.png"
                                        }
                                        alt=""
                                    />
                                    <span className="stats">124</span>
                                    <img src="../icons/comments.png" alt="" />
                                    <span className="stats">63</span>
                                    <img src="../icons/shares.png" alt="" />
                                    <span className="stats">4</span>
                                    <img src="../icons/views.png" alt="" />
                                    <span className="stats">1426</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card2;
