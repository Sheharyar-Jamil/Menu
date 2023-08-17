import React from "react";

const Menu = (props) => {
    return(
        <article className="menu-item" key={props.id}>
            <img src={props.image} alt={props.title} className="photo"/>
            <div className="item-info">
                <header>
                    <h4>{props.title}</h4>
                    <h4 className="price">${props.price}</h4>
                </header>
                <p className="item-text">{props.desc}</p>
            </div>
        </article>        
    );
};

export default Menu;