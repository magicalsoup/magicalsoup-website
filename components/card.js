import React from 'react';
export default function Card({props}) {
    return (
        <div class="card">
            <figure class="card__thumb">
                <img src={props.imageSrc} class="card__image"/>
                <figcaption class="card__caption">
                    <h2 class="card__title">{props.title}</h2>
                    <p class="card__snippet">{props.description}</p>
                </figcaption>
            </figure>
        </div>
    )
}