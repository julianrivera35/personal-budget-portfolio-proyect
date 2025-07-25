import React from "react";
import "./Card.css";

const Card = ({title, value, children, minWidth, maxHeight, icon}) => {
    const cardStyle = {
        ...(minWidth && {minWidth}),
        ...(maxHeight && {maxHeight})
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-title-container">
                <h2>{title}</h2>
                <div className="card-icon-container">
                    {icon}
                </div>
            </div>
            
            <p className="card-value">{value}</p>
            {children}

        </div>
    )
}

export default Card;