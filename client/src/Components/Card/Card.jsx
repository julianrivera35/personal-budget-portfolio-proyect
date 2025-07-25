import React from "react";
import "./Card.css";

const Card = ({title, value, children, minWidth, maxHeight, icon, titleStyle}) => {
    const cardStyle = {
        ...(minWidth && {minWidth}),
        ...(maxHeight && {maxHeight})
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-title-container">
                <h2 style={titleStyle}>{title}</h2>
                {icon && <div className="card-icon-container">
                    {icon}
                </div>}
            </div>
            {value && <p className="card-value">{value}</p>}
            {children && <div className="card-content">{children}</div>}

        </div>
    )
}

export default Card;