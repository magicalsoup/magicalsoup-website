import React from 'react';
export default function Card({props}) {
    return (
        <div className="card">
            <div className="card__thumb">
                <img src={props.imageSrc} className="card__image"/>
                <div className="card__caption">
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__snippet">{props.description}</p>
                </div>
            </div>
        </div>
    )
}