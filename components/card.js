import React from 'react';
export default function Card({props}) {
    return (
        <div className="card">
            <div className="card__thumb">
                {/*maybe change to object-scale-down*/}
                <img src={props.imageSrc} className="object-fill w-full h-full"/>
                <div className="card__caption">
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__snippet">{props.description}</p>
                </div>
            </div>
        </div>
    )
}