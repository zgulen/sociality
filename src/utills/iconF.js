export const socialIcon = (icon) => {
    if (icon === "facebook") {
        return <i className="fa-brands fa-facebook"></i>;
    } else if (icon === "twitter") {
        return <i className="fa-brands fa-twitter"></i>;
    } else {
        return <i className="fa-brands fa-instagram"></i>;
    }
};