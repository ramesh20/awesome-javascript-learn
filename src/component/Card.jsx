import React from 'react';

function Card(props) {
    // console.log(props);
    return(
        <React.Fragment>
            <div className="card">
                <div className="card__title">{props.cardtitle}</div>
                <div className="card__address">{props.cardaddress}</div>
                <a href={props.cardurl}>
                    <img src={props.cardimage} alt="image" />
                </a>
            </div>
        </React.Fragment>
    );
}

export default Card;
